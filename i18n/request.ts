import {cookies} from "next/headers";
import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async () => {
	const store = await cookies();
	// Читаем язык из куки `locale`, по умолчанию - русский
	const locale = store.get("locale")?.value || "ru";

	return {
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});


