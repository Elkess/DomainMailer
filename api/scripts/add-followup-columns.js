const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addFollowUpColumns() {
  try {
    console.log('🔗 Connecting to database...');
    
    // Add Campaign follow-up columns
    const campaignColumns = [
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp2Subject" TEXT',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp2Body" TEXT',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp2DelayHours" INTEGER DEFAULT 72',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp3Subject" TEXT',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp3Body" TEXT',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp3DelayHours" INTEGER DEFAULT 72',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp4Subject" TEXT',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp4Body" TEXT',
      'ALTER TABLE campaigns ADD COLUMN IF NOT EXISTS "followUp4DelayHours" INTEGER DEFAULT 72',
    ];

    // Add Lead follow-up tracking columns
    const leadColumns = [
      'ALTER TABLE leads ADD COLUMN IF NOT EXISTS "currentSequenceStep" INTEGER DEFAULT 1',
      'ALTER TABLE leads ADD COLUMN IF NOT EXISTS "lastMessageId" TEXT',
      'ALTER TABLE leads ADD COLUMN IF NOT EXISTS "lastThreadId" TEXT',
      'ALTER TABLE leads ADD COLUMN IF NOT EXISTS "receivedReply" BOOLEAN DEFAULT false',
    ];

    // Add EmailLog sequence step column
    const emailLogColumns = [
      'ALTER TABLE email_logs ADD COLUMN IF NOT EXISTS "sequenceStep" INTEGER DEFAULT 1',
    ];

    console.log('📝 Adding Campaign follow-up columns...');
    for (const sql of campaignColumns) {
      await prisma.$executeRawUnsafe(sql);
      console.log(`  ✅ ${sql.substring(0, 60)}...`);
    }

    console.log('📝 Adding Lead tracking columns...');
    for (const sql of leadColumns) {
      await prisma.$executeRawUnsafe(sql);
      console.log(`  ✅ ${sql.substring(0, 60)}...`);
    }

    console.log('📝 Adding EmailLog columns...');
    for (const sql of emailLogColumns) {
      await prisma.$executeRawUnsafe(sql);
      console.log(`  ✅ ${sql.substring(0, 60)}...`);
    }

    console.log('✅ All columns added successfully!');
  } catch (error) {
    console.error('❌ Error adding columns:', error.message);
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

addFollowUpColumns();
