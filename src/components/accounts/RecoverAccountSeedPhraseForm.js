import React from 'react'
import { Translate } from 'react-localize-redux'
import { Input } from 'semantic-ui-react'
import FormButton from '../common/FormButton'
import RequestStatusBox from '../common/RequestStatusBox'
import classNames from '../../utils/classNames'

const RecoverAccountSeedPhraseForm = ({
    formLoader,
    isLegit,
    handleChange,
    seedPhrase,
    accountId,
    requestStatus
}) => (
        <>
            <h4><Translate id='input.accountId.title' /></h4>
            <Translate>
                {({ translate }) => (
                    <>
                        <Input
                            name='accountId'
                            value={accountId}
                            onChange={handleChange}
                            className={classNames([{'success': requestStatus && requestStatus.success}, {'problem': requestStatus && requestStatus.success === false}])}
                            placeholder={translate('input.accountId.placeholder')}
                            required
                            tabIndex='1'
                            spellCheck='false'
                            autoCapitalize='off'
                            autoCorrect='off'
                            autoComplete='off'
                            autoFocus={true}
                        />
                        <div className='input-sub-label'>{translate('input.accountId.subLabel')}</div>
                    </>
                )}
            </Translate>
            <h4><Translate id='recoverSeedPhrase.seedPhraseInput.title' /></h4>
            <Translate>
                {({ translate }) => (
                    <Input
                        name='seedPhrase'
                        value={seedPhrase}
                        onChange={handleChange}
                        className={classNames([{'success': requestStatus && requestStatus.success}, {'problem': requestStatus && requestStatus.success === false}])}
                        placeholder={translate('recoverSeedPhrase.seedPhraseInput.placeholder')}
                        required
                        tabIndex='2'
                    />
                )}
            </Translate>
            <RequestStatusBox requestStatus={requestStatus} />
            <FormButton
                type='submit'
                color='blue'
                disabled={!isLegit}
                sending={formLoader}
            >
                <Translate id='button.findMyAccount' />
            </FormButton>
        </>
    )

export default RecoverAccountSeedPhraseForm
