from transformers import pipeline
sentiment_analysis = pipeline("sentiment-analysis")
def dataProecssing(data):

    score = data['score']

    if data['label'] == 'POSITIVE':
        score_out_of_100 = score * 100
    else:
        score_out_of_100 = (1 - score) * 100

    processed_data = {'label': data['label'], 'score': score_out_of_100}
    return processed_data

def sa(txt):
    result = sentiment_analysis(txt)[0]
    # print("Label:", result['label'])
    # print("Confidence Score:", result['score'])
    dataProecssing(result)