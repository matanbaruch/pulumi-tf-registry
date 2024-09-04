// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBroker(opts?: pulumi.InvokeOptions): Promise<GetBrokerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getBroker:getBroker", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getBroker.
 */
export interface GetBrokerResult {
    readonly authBruteForceProtectionEnabled: boolean;
    readonly authClientCertRevocationCheckMode: string;
    readonly configSyncAuthenticationClientCertMaxChainDepth: number;
    readonly configSyncAuthenticationClientCertValidateDateEnabled: boolean;
    readonly configSyncClientProfileTcpInitialCongestionWindow: number;
    readonly configSyncClientProfileTcpKeepaliveCount: number;
    readonly configSyncClientProfileTcpKeepaliveIdle: number;
    readonly configSyncClientProfileTcpKeepaliveInterval: number;
    readonly configSyncClientProfileTcpMaxWindow: number;
    readonly configSyncClientProfileTcpMss: number;
    readonly configSyncEnabled: boolean;
    readonly configSyncSynchronizeUsernameEnabled: boolean;
    readonly configSyncTlsEnabled: boolean;
    readonly guaranteedMsgingDefragmentationScheduleDayList: string;
    readonly guaranteedMsgingDefragmentationScheduleEnabled: boolean;
    readonly guaranteedMsgingDefragmentationScheduleTimeList: string;
    readonly guaranteedMsgingDefragmentationThresholdEnabled: boolean;
    readonly guaranteedMsgingDefragmentationThresholdFragmentationPercentage: number;
    readonly guaranteedMsgingDefragmentationThresholdMinInterval: number;
    readonly guaranteedMsgingDefragmentationThresholdUsagePercentage: number;
    readonly guaranteedMsgingDiskArrayWwn: string;
    readonly guaranteedMsgingDiskLocation: string;
    readonly guaranteedMsgingEnabled: boolean;
    readonly guaranteedMsgingEventCacheUsageThreshold: outputs.GetBrokerGuaranteedMsgingEventCacheUsageThreshold;
    readonly guaranteedMsgingEventDeliveredUnackedThreshold: outputs.GetBrokerGuaranteedMsgingEventDeliveredUnackedThreshold;
    readonly guaranteedMsgingEventDiskUsageThreshold: outputs.GetBrokerGuaranteedMsgingEventDiskUsageThreshold;
    readonly guaranteedMsgingEventEgressFlowCountThreshold: outputs.GetBrokerGuaranteedMsgingEventEgressFlowCountThreshold;
    readonly guaranteedMsgingEventEndpointCountThreshold: outputs.GetBrokerGuaranteedMsgingEventEndpointCountThreshold;
    readonly guaranteedMsgingEventIngressFlowCountThreshold: outputs.GetBrokerGuaranteedMsgingEventIngressFlowCountThreshold;
    readonly guaranteedMsgingEventMsgCountThreshold: outputs.GetBrokerGuaranteedMsgingEventMsgCountThreshold;
    readonly guaranteedMsgingEventMsgSpoolFileCountThreshold: outputs.GetBrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold;
    readonly guaranteedMsgingEventMsgSpoolUsageThreshold: outputs.GetBrokerGuaranteedMsgingEventMsgSpoolUsageThreshold;
    readonly guaranteedMsgingEventTransactedSessionCountThreshold: outputs.GetBrokerGuaranteedMsgingEventTransactedSessionCountThreshold;
    readonly guaranteedMsgingEventTransactedSessionResourceCountThreshold: outputs.GetBrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold;
    readonly guaranteedMsgingEventTransactionCountThreshold: outputs.GetBrokerGuaranteedMsgingEventTransactionCountThreshold;
    readonly guaranteedMsgingMaxCacheUsage: number;
    readonly guaranteedMsgingMaxMsgSpoolUsage: number;
    readonly guaranteedMsgingTransactionReplicationCompatibilityMode: string;
    readonly guaranteedMsgingVirtualRouterWhenActiveActive: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly oauthProfileDefault: string;
    readonly serviceAmqpEnabled: boolean;
    readonly serviceAmqpTlsListenPort: number;
    readonly serviceEventConnectionCountThreshold: outputs.GetBrokerServiceEventConnectionCountThreshold;
    readonly serviceHealthCheckEnabled: boolean;
    readonly serviceHealthCheckListenPort: number;
    readonly serviceHealthCheckTlsEnabled: boolean;
    readonly serviceHealthCheckTlsListenPort: number;
    readonly serviceMqttEnabled: boolean;
    readonly serviceMsgBackboneEnabled: boolean;
    readonly serviceRestEventOutgoingConnectionCountThreshold: outputs.GetBrokerServiceRestEventOutgoingConnectionCountThreshold;
    readonly serviceRestIncomingEnabled: boolean;
    readonly serviceRestOutgoingEnabled: boolean;
    readonly serviceSempCorsAllowAnyHostEnabled: boolean;
    readonly serviceSempLegacyTimeoutEnabled: boolean;
    readonly serviceSempPlainTextEnabled: boolean;
    readonly serviceSempSessionIdleTimeout: number;
    readonly serviceSempSessionMaxLifetime: number;
    readonly serviceSempTlsEnabled: boolean;
    readonly serviceSmfCompressionListenPort: number;
    readonly serviceSmfEnabled: boolean;
    readonly serviceSmfEventConnectionCountThreshold: outputs.GetBrokerServiceSmfEventConnectionCountThreshold;
    readonly serviceSmfPlainTextListenPort: number;
    readonly serviceSmfRoutingControlListenPort: number;
    readonly serviceSmfTlsListenPort: number;
    readonly serviceTlsEventConnectionCountThreshold: outputs.GetBrokerServiceTlsEventConnectionCountThreshold;
    readonly serviceWebTransportEnabled: boolean;
    readonly serviceWebTransportPlainTextListenPort: number;
    readonly serviceWebTransportTlsListenPort: number;
    readonly serviceWebTransportWebUrlSuffix: string;
    readonly tlsBlockVersion10Enabled: boolean;
    readonly tlsBlockVersion11Enabled: boolean;
    readonly tlsCipherSuiteManagementList: string;
    readonly tlsCipherSuiteMsgBackboneList: string;
    readonly tlsCipherSuiteSecureShellList: string;
    readonly tlsCrimeExploitProtectionEnabled: boolean;
    readonly tlsStandardDomainCertificateAuthoritiesEnabled: boolean;
    readonly tlsTicketLifetime: number;
    readonly webManagerAllowUnencryptedWizardsEnabled: boolean;
    readonly webManagerRedirectHttpEnabled: boolean;
    readonly webManagerRedirectHttpOverrideTlsPort: number;
}
export function getBrokerOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetBrokerResult> {
    return pulumi.output(getBroker(opts))
}
