/*!
 * Copyright (c) 2026 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

// An optional small image shown beside a card's name, chosen from the card's
// image attachments independently of its cover.
module.exports.up = async (knex) => {
  await knex.schema.alterTable('card', (table) => {
    table.bigInteger('thumbnail_attachment_id');
  });
};

module.exports.down = async (knex) => {
  await knex.schema.alterTable('card', (table) => {
    table.dropColumn('thumbnail_attachment_id');
  });
};
