namespace Riskmanagement_sap;



using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

using { sap.common } from '@sap/cds/common';
using { API_BUSINESS_PARTNER as external } from '../srv/external/API_BUSINESS_PARTNER';
entity Risks : managed
{
    key ID : UUID
        @Core.Computed;
    miti : Association to one Mitigations;
    title : String(100);
    prio : String(5);
    description : String(100);
    impact : Integer;
    criticality : Integer;
    supplier : Association to one external.A_BusinessPartner;
}

entity Mitigations : managed
{
    key ID : UUID
        @Core.Computed;
    risks : Association to many Risks on risks.miti = $self;
    description : String(100);
    owner : String(100);
    timeline : String(100);
}
