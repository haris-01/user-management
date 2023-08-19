import { useMutation } from "@apollo/client";
import { ADD_SENTENCES } from "@mutations/userMutations";
import { GET_SENTENCES } from "@queries/userQuery";
import { WORD_CLOUD } from "@queries/wordCloudQueries";
import { SentenceType, SentenceTypeData } from "src/types/sentenceType";

export type SentenceMutationsType = {
  addSentence: SentenceType;
};

export const useAddSentence = () => {
  const [addSentence] = useMutation<SentenceMutationsType>(ADD_SENTENCES, {
    update(cache, { data }) {
      const addedSentence = data?.addSentence;
      const sentenceCache = cache.readQuery({
        query: GET_SENTENCES,
      }) as SentenceTypeData;
      const sentences = sentenceCache?.sentences;
      cache.writeQuery({
        query: GET_SENTENCES,
        data: { sentences: [...sentences, addedSentence] },
      });
    },
    refetchQueries: [{ query: WORD_CLOUD }],
  });

  const add = (sentence: string) => {
    addSentence({ variables: { sentence } });
  };

  return {
    addSentence: add,
  };
};
