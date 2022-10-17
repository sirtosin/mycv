import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../types";

const query = groq`
*[_type == 'experience']{
  ...,technologies[]->
}
`;

type Data = {
    Experiences:Experience[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const Experiences:Experience[] = await sanityClient.fetch(query)
  res.status(200).json({ Experiences });
}
