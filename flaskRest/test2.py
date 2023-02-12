import json
data = "{'label': 'NEGATIVE', 'score': 0.07530450820922852}".replace('\'','"')
print((json.loads(data))['score'])