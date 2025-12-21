import type { H3Event } from "h3";
import { useFetch } from "nuxt/app";
import { FetchError } from "ofetch";



export default defineEventHandler(async(event:H3Event)=>{
    // const options = getRequestHeaders(event)
    // const session = await getUserSession(event)
    const endPoint:any = useRuntimeConfig()?.apiUrl
    const params = getRouterParams(event)
    // if (!session?.user) {
    //     throw createError({
    //     statusCode: 401,
    //     statusMessage: "Unauthorized",
    //     data: { message: "Anda belum login." },
    //     });
    // }

  try {
        const apiRes:any = await $fetch(`${endPoint}${params?.tipe}/${params?.id}`, {
            method: 'GET',
            headers: {
                // Authorization: session ? 'Bearer ' + session.user?.token : '',
                Accept: "application/json",
                // ...options?.headers,
            }
        })
        return apiRes

    return apiRes;
  } catch (error: any) {
    // 🧠 Tangkap error dari backend dan kirim balik ke frontend
    if (error instanceof FetchError) {
      // kirimkan pesan error asli dari backend (bukan diganti "Server Error")
      throw createError({
        statusCode: error?.statusCode || 500,
        statusMessage: error?.statusMessage || "FetchError",
        data: error?.data || { message: error?.message || "Terjadi kesalahan koneksi." },
      });
    }

    // fallback untuk error lain (bukan FetchError)
    throw createError({
      statusCode: 500,
      statusMessage: "Server Error",
      data: { message: "Terjadi kesalahan internal server." },
    });
  }




})