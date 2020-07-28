import React from 'react'
import { Translate } from 'react-localize-redux'
import styled from 'styled-components'
import LandingBackground from './LandingBackground'
import Container from '../common/styled/Container.css'
import FormButton from '../common/FormButton'
import SignUpPhoneImg from '../../images/create-phone.png'
import EmailSubscribe from './EmailSubscribe'

const StyledContainer = styled.div`

    &&& {
        margin: 35px 5px 0 5px;
        position: relative;
        text-align: center;

        @media (max-width: 767px) {
            margin: 0;
            overflow: hidden;
        }

        svg {
            opacity: 0.4;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            z-index: -1;

            @media (max-width: 992px) {
                top: -120px;
            }
        }

        .small-centered {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        h1 {
            font-weight: 600;
        }

        h3 {
            font-family: benton-sans !important;
            font-weight: 400 !important;
            line-height: 150% !important;

            span {
                span {
                    font-weight: 500;
                }
            }
        }

        .buttons {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1;

            .blue {
                font-weight: 500 !important;
                letter-spacing: normal;
                margin: 0;
                text-transform: none;

                :not(.link) {
                    min-width: 200px;
                    max-width: 220px;
                    height: auto;
                    text-transform: none;
                    padding: 8px 6px;
                }
            }

            .link {
                text-decoration: none;
                padding: 0;
                :hover {
                    background-color: transparent;
                    text-decoration: underline;
                }
            }

            span {
                margin: 20px;
            }

            @media (min-width: 768px) {
                flex-direction: row;
            }
        }

        img {
            margin-top: -25px;
        }

        .email-subscribe {
            margin-top: -215px;
            margin-bottom: 50px;
            padding-top: 80px;

            @media (max-width: 767px) {
                margin-bottom: 0;
            }
        }
    }
`

export function GuestLanding() {
    return (
        <StyledContainer>
            <LandingBackground/>
            <Container className='small-centered'>
                <h1><Translate id='landing.title' /></h1>
                <h3><Translate id='landing.desc' /></h3>
                <div className='buttons'>
                    <FormButton linkTo='/sign-in-ledger'><Translate id='button.signInLedger' /></FormButton>
                    <span><Translate id='landing.or' /></span>
                    <FormButton linkTo='/recover-account' className='link'><Translate id='button.recoverYourAccount' /></FormButton>
                </div>
                <img src={SignUpPhoneImg} alt='Sign up'/>
            </Container>
            <EmailSubscribe/>
        </StyledContainer>
    )
}