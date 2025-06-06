import { EuiTitle } from '@elastic/eui'
import React from 'react'
import { Spacer } from 'uiSrc/components/base/layout/spacer'

export const CHECK_CLOUD_DATABASE = (
  <>
    <EuiTitle size="xxs">
      <span>Build your app with Redis Cloud</span>
    </EuiTitle>
    <Spacer size="s" />
    <div>
      Free trial Cloud DBs auto-delete after 15 days of inactivity.
      <Spacer size="s" />
      But not to worry, you can always re-create it to test your ideas.
      <br />
      Includes native support for JSON, Query Engine and more.
    </div>
  </>
)

export const WARNING_WITH_CAPABILITY = (capability: string) => (
  <>
    <EuiTitle size="xxs">
      <span>Build your app with {capability}</span>
    </EuiTitle>
    <Spacer size="s" />
    <div>
      Hey, remember your interest in {capability}?
      <br />
      Use your free trial Redis Cloud DB to try it.
    </div>
    <Spacer size="s" />
    <div>
      <b>Note</b>: Free trial Cloud DBs auto-delete after 15 days of inactivity.
    </div>
  </>
)
export const WARNING_WITHOUT_CAPABILITY = (
  <>
    <EuiTitle size="xxs">
      <span>Your free trial Redis Cloud DB is waiting.</span>
    </EuiTitle>
    <Spacer size="s" />
    <div>
      Test ideas and build prototypes.
      <br />
      Includes native support for JSON, Query Engine and more.
    </div>
    <Spacer size="s" />
    <div>
      <b>Note</b>: Free trial Cloud DBs auto-delete after 15 days of inactivity.
    </div>
  </>
)
