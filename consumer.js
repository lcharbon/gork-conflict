const {Kafka} = require('kafkajs');

async function consume() {
    kafka = new Kafka({
        clientId: "dfLogger",
        brokers: ["localhost:9092"]
    });

    const consumer = this.kafka.consumer({ groupId: "test" });
    
    await consumer.connect();

    await consumer.subscribe({
        topic: "Test",
        fromBeginning: false
    });

    await consumer.run({
        eachMessage: result => {
            console.log(result.message.value.toString());
        }
    })
}

module.exports = consume;