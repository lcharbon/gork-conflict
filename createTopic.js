const { Kafka } = require("kafkajs");

async function run() {
    const kafka = new Kafka({
        clientId: "dfLogger",
        brokers: ["localhost:9092"]
    })

    const admin = kafka.admin();

    await admin.connect();

    // await admin.deleteTopics({
    //     topics: ['Logs']
    // })

    await admin.createTopics({
        topics: [{
            topic: "Test",
            numPartitions: 1
        }]
    })

    await admin.disconnect();
}

run()