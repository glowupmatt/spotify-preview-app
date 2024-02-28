// import  authOptions  from "./[...nextauth]/authOptions"
// import { getServerSession } from "next-auth";

// export default async function signOutProvider(req: Request, res: Response) {
//   if (req.method === "PUT") {
//     const session = await getServerSession(req, res, authOptions);
//     if (session?.idToken) {
//       try {
//         // destroy user's session on the provider
//         await axios.get("<your-issuer>/protocol/openid-connect/logout", { params: id_token_hint: session.idToken });
//         res.status(200).json(null);
//       }
//       catch (error) {
//         res.status(500).json(null);
//       }
//     } else {
//       // if user is not signed in, give 200
//       res.status(200).json(null);
//     }
//   }
// }
