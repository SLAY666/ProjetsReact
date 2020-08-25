import { openDB, deleteDB, wrap, unwrap } from 'idb';

const DATABASE_NAME = 'SERVICE_ORDERS';
const DATABASE_VERSION = 2;
const db = idb.default;

export const BUCKETS = ['Bucket01', 'Bucket02']
export const BUSINESS_UNITS = ['BU1', 'BU2', 'BU3', 'BU4', 'BU5']
export const STATUS = ['In Progress', 'Completed', 'Pending']
/**
 * Initialize the IndexedDB.
 * see https://developers.google.com/web/ilt/pwa/lab-indexeddb
 * for information as to why we use switch w/o breaks for migrations.
 * add do the database version and add a switch case each time you need to
 * change migrations
 */
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, function (upgradeDb) {
  /* tslint:disable */
  switch (upgradeDb.oldVersion) {
    case 0:
    // a placeholder case so that the switch block will
    // execute when the database is first created
    // (oldVersion is 0)
    case 1:
      upgradeDb.createObjectStore('ServiceOrders', { keyPath: 'id' });
      const tx = upgradeDb.transaction.objectStore('ServiceOrders', 'readwrite')
      tx.createIndex('Bucket', 'bucket')
      tx.createIndex('businessUnit', 'businessUnit')
      tx.createIndex('status', 'status')
      tx.createIndex('BucketBusinessUnitStatus', ['bucket', 'businessUnit', 'status'])
      for (let i = 0; i < 100000; i++) {
        tx.put({
          id: i,
          bucket: BUCKETS[Math.floor(Math.random() * BUCKETS.length)],
          businessUnit: BUSINESS_UNITS[Math.floor(Math.random() * BUSINESS_UNITS.length)],
          status: STATUS[Math.floor(Math.random() * STATUS.length)]
        });
      }
  }
});

class DBService {

  get(tablespace, key) {
    return dbPromise.then(db => {
      return db.transaction(tablespace).objectStore(tablespace).get(key);
    }).catch(error => {
      // Do something?
    });
  }

  getAll(tablespace, indexName, index = []) {
    return dbPromise.then(db => {
      return db.transaction(tablespace).objectStore(tablespace).index(indexName).getAll(index);
    }).catch(error => {
      // Do something?
    });
  }

  put(tablespace, object, key = null) {
    return dbPromise.then(db => {
      if (key) {
        return db.transaction(tablespace, 'readwrite').objectStore(tablespace).put(object, key);
      }
      return db.transaction(tablespace, 'readwrite').objectStore(tablespace).put(object);
    }).catch(error => {
      // Do something?
    });
  }

  delete(tablespace, key) {
    return dbPromise.then(db => {
      return db.transaction(tablespace, 'readwrite').objectStore(tablespace).delete(key);
    }).catch(error => {
      // Do something?
    });
  }

  deleteAll(tablespace) {
    return dbPromise.then(db => {
      return db.transaction(tablespace, 'readwrite').objectStore(tablespace).clear();
    }).catch(error => {
      // Do something?
    });
  }
}

export const Service = new DBService();