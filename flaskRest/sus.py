from sentimentAnalysis import sa
from OpenAI import companySus
def susCheck(company):
    # Your implementation of the SUS score calculation goes here
    txt = companySus(company)    
    sus_score = sa(txt)
    return sus_score