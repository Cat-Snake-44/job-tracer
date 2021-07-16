// eslint-disable-next-line no-unused-vars
import { describe, expect } from '@jest/globals';

const request = require('supertest');

const server = 'http://localhost:3000/api';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // eslint-disable-next-line no-undef
      it('responds with 200 status and application/javascript content type', () =>
        request(server)
          .get('/')
          .expect('Content-Type', /application\/json/)
          .expect(200));
    });
  });

  describe('/jobApplication', () => {
    describe('POST', () => {
      // eslint-disable-next-line no-undef
      it('responds with 200 status and application/json content type', () =>
        request(server)
          .post('/jobApplication')
          .send({
            company_name: 'Apple',
            job_title: 'engineer',
            salary: 1000,
            description: 'wow',
            post_source: 'Friend',
            status_name: 'Pending',
            status_date: '2021-07-14T07:00:00.000Z',
            notes: 'cool',
            favorite: true,
          })
          .expect('Content-Type', /application\/json/)
          .expect(200));

      // eslint-disable-next-line no-undef
      it('responds with the updated list of job applications', () => {
        const temp = {
          company_name: 'Google',
          job_title: 'engineer',
          salary: 5000,
          description: 'nice',
          post_source: 'Internet',
          status_name: 'Applied',
          status_date: '2020-08-14T07:00:00.000Z',
          notes: 'Awesome',
          favorite: false,
        };

        return (
          request(server)
            .post('/jobApplication')
            .send(temp)
            // eslint-disable-next-line no-unused-vars
            .expect((res) => {
              console.log('this is res.body:', res.body, 'this is temp:', temp);
              expect(JSON.parse(res.text)).toEqual(
                expect.objectContaining(temp)
              );
            })
        );
      });
    });
  });
});

// _id: 7, company: 'apple', job_title: 'software engineer',
//                              salary: 80000, description: 'fullstack engineer', post_source: 'hello',
//                               status_name: 'wow', notes: 'note', status_date: '11/23/2020',
//                                 date_created: '10/30/2019', favorite: true})
