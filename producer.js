const {Kafka} = require('kafkajs');

async function produce() {
    kafka = new Kafka({
        clientId: "dfLogger",
        brokers: ["localhost:9092"]
    });

    const producer = this.kafka.producer();
    
    await producer.connect();

    let result = await producer.send({
        topic: "Test",
        messages: [
            {
                value: "Hello World!",
                partition: 0
            }  
        ]
    });

    console.log("~~~~~result~~~~~")
    console.log(result)
    console.log("~~~~~~~~~~~~~~~~")

    await producer.disconnect();
}

module.exports = produce;