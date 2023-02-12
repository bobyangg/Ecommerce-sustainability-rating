import openai
# Set up openAI api key path
openai.api_key_path = 'Key'
# Define the model to use
model_engine = "davinci"

# Define the prompt to complete


def companySus(value):
    prompt = "what is the general consumer opinion on <company> on sustainability?"
    # Define the variable to be replaced
    variable = "<company>"

    # Replace the variable in the prompt with its value
    prompt = prompt.replace(variable, value)

    # Generate the completion
    completion = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=500,
        n=1,
        stop=None,
        temperature=0.5,
    )

    # Get the message
    message = completion.choices[0].text
    print(message)
    return message
