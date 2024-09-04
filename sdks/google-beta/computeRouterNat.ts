// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeRouterNat extends pulumi.CustomResource {
    /**
     * Get an existing ComputeRouterNat resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeRouterNatState, opts?: pulumi.CustomResourceOptions): ComputeRouterNat {
        return new ComputeRouterNat(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeRouterNat:ComputeRouterNat';

    /**
     * Returns true if the given object is an instance of ComputeRouterNat.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeRouterNat {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeRouterNat.__pulumiType;
    }

    /**
     * The network tier to use when automatically reserving NAT IP addresses. Must be one of: PREMIUM, STANDARD. If not
     * specified, then the current project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]
     */
    public readonly autoNetworkTier!: pulumi.Output<string>;
    /**
     * A list of URLs of the IP resources to be drained. These IPs must be valid static external IPs that have been assigned to
     * the NAT.
     */
    public readonly drainNatIps!: pulumi.Output<string[] | undefined>;
    /**
     * Enable Dynamic Port Allocation. If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or
     * equal to 32. If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config. If
     * maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm. If maxPortsPerVm is not
     * set, a maximum of 65536 ports will be allocated to a VM from this NAT config. Mutually exclusive with
     * enableEndpointIndependentMapping.
     */
    public readonly enableDynamicPortAllocation!: pulumi.Output<boolean>;
    /**
     * Enable endpoint independent mapping. For more information see the [official
     * documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
     */
    public readonly enableEndpointIndependentMapping!: pulumi.Output<boolean>;
    /**
     * Specifies the endpoint Types supported by the NAT Gateway. Supported values include: 'ENDPOINT_TYPE_VM',
     * 'ENDPOINT_TYPE_SWG', 'ENDPOINT_TYPE_MANAGED_PROXY_LB'.
     */
    public readonly endpointTypes!: pulumi.Output<string[]>;
    /**
     * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
     */
    public readonly icmpIdleTimeoutSec!: pulumi.Output<number | undefined>;
    /**
     * Configuration for logging on NAT
     */
    public readonly logConfig!: pulumi.Output<outputs.ComputeRouterNatLogConfig | undefined>;
    /**
     * Maximum number of ports allocated to a VM from this NAT. This field can only be set when enableDynamicPortAllocation is
     * enabled.
     */
    public readonly maxPortsPerVm!: pulumi.Output<number | undefined>;
    /**
     * Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port
     * allocation if not set.
     */
    public readonly minPortsPerVm!: pulumi.Output<number>;
    /**
     * Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * How external IPs should be allocated for this NAT. Valid values are 'AUTO_ONLY' for only allowing NAT IPs allocated by
     * Google Cloud Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY",
     * "AUTO_ONLY"]
     */
    public readonly natIpAllocateOption!: pulumi.Output<string | undefined>;
    /**
     * Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.
     */
    public readonly natIps!: pulumi.Output<string[] | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Region where the router and NAT reside.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The name of the Cloud Router in which this NAT will be configured.
     */
    public readonly router!: pulumi.Output<string>;
    /**
     * A list of rules associated with this NAT.
     */
    public readonly rules!: pulumi.Output<outputs.ComputeRouterNatRule[] | undefined>;
    /**
     * How NAT should be configured per Subnetwork. If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the IP ranges in every
     * Subnetwork are allowed to Nat. If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP ranges in every
     * Subnetwork are allowed to Nat. 'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat (specified in the field
     * subnetwork below). Note that if this field contains ALL_SUBNETWORKS_ALL_IP_RANGES or
     * ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any other RouterNat section in any Router for this
     * network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES",
     * "LIST_OF_SUBNETWORKS"]
     */
    public readonly sourceSubnetworkIpRangesToNat!: pulumi.Output<string>;
    /**
     * One or more subnetwork NAT configurations. Only used if 'source_subnetwork_ip_ranges_to_nat' is set to
     * 'LIST_OF_SUBNETWORKS'
     */
    public readonly subnetworks!: pulumi.Output<outputs.ComputeRouterNatSubnetwork[] | undefined>;
    /**
     * Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.
     */
    public readonly tcpEstablishedIdleTimeoutSec!: pulumi.Output<number | undefined>;
    /**
     * Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.
     */
    public readonly tcpTimeWaitTimeoutSec!: pulumi.Output<number | undefined>;
    /**
     * Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.
     */
    public readonly tcpTransitoryIdleTimeoutSec!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeRouterNatTimeouts | undefined>;
    /**
     * Indicates whether this NAT is used for public or private IP translation. If unspecified, it defaults to PUBLIC. If
     * 'PUBLIC' NAT used for public IP translation. If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC"
     * Possible values: ["PUBLIC", "PRIVATE"]
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
     */
    public readonly udpIdleTimeoutSec!: pulumi.Output<number | undefined>;

    /**
     * Create a ComputeRouterNat resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeRouterNatArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeRouterNatArgs | ComputeRouterNatState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeRouterNatState | undefined;
            resourceInputs["autoNetworkTier"] = state ? state.autoNetworkTier : undefined;
            resourceInputs["drainNatIps"] = state ? state.drainNatIps : undefined;
            resourceInputs["enableDynamicPortAllocation"] = state ? state.enableDynamicPortAllocation : undefined;
            resourceInputs["enableEndpointIndependentMapping"] = state ? state.enableEndpointIndependentMapping : undefined;
            resourceInputs["endpointTypes"] = state ? state.endpointTypes : undefined;
            resourceInputs["icmpIdleTimeoutSec"] = state ? state.icmpIdleTimeoutSec : undefined;
            resourceInputs["logConfig"] = state ? state.logConfig : undefined;
            resourceInputs["maxPortsPerVm"] = state ? state.maxPortsPerVm : undefined;
            resourceInputs["minPortsPerVm"] = state ? state.minPortsPerVm : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natIpAllocateOption"] = state ? state.natIpAllocateOption : undefined;
            resourceInputs["natIps"] = state ? state.natIps : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["router"] = state ? state.router : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["sourceSubnetworkIpRangesToNat"] = state ? state.sourceSubnetworkIpRangesToNat : undefined;
            resourceInputs["subnetworks"] = state ? state.subnetworks : undefined;
            resourceInputs["tcpEstablishedIdleTimeoutSec"] = state ? state.tcpEstablishedIdleTimeoutSec : undefined;
            resourceInputs["tcpTimeWaitTimeoutSec"] = state ? state.tcpTimeWaitTimeoutSec : undefined;
            resourceInputs["tcpTransitoryIdleTimeoutSec"] = state ? state.tcpTransitoryIdleTimeoutSec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["udpIdleTimeoutSec"] = state ? state.udpIdleTimeoutSec : undefined;
        } else {
            const args = argsOrState as ComputeRouterNatArgs | undefined;
            if ((!args || args.router === undefined) && !opts.urn) {
                throw new Error("Missing required property 'router'");
            }
            if ((!args || args.sourceSubnetworkIpRangesToNat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceSubnetworkIpRangesToNat'");
            }
            resourceInputs["autoNetworkTier"] = args ? args.autoNetworkTier : undefined;
            resourceInputs["drainNatIps"] = args ? args.drainNatIps : undefined;
            resourceInputs["enableDynamicPortAllocation"] = args ? args.enableDynamicPortAllocation : undefined;
            resourceInputs["enableEndpointIndependentMapping"] = args ? args.enableEndpointIndependentMapping : undefined;
            resourceInputs["endpointTypes"] = args ? args.endpointTypes : undefined;
            resourceInputs["icmpIdleTimeoutSec"] = args ? args.icmpIdleTimeoutSec : undefined;
            resourceInputs["logConfig"] = args ? args.logConfig : undefined;
            resourceInputs["maxPortsPerVm"] = args ? args.maxPortsPerVm : undefined;
            resourceInputs["minPortsPerVm"] = args ? args.minPortsPerVm : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natIpAllocateOption"] = args ? args.natIpAllocateOption : undefined;
            resourceInputs["natIps"] = args ? args.natIps : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["router"] = args ? args.router : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["sourceSubnetworkIpRangesToNat"] = args ? args.sourceSubnetworkIpRangesToNat : undefined;
            resourceInputs["subnetworks"] = args ? args.subnetworks : undefined;
            resourceInputs["tcpEstablishedIdleTimeoutSec"] = args ? args.tcpEstablishedIdleTimeoutSec : undefined;
            resourceInputs["tcpTimeWaitTimeoutSec"] = args ? args.tcpTimeWaitTimeoutSec : undefined;
            resourceInputs["tcpTransitoryIdleTimeoutSec"] = args ? args.tcpTransitoryIdleTimeoutSec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["udpIdleTimeoutSec"] = args ? args.udpIdleTimeoutSec : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeRouterNat.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeRouterNat resources.
 */
export interface ComputeRouterNatState {
    /**
     * The network tier to use when automatically reserving NAT IP addresses. Must be one of: PREMIUM, STANDARD. If not
     * specified, then the current project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]
     */
    autoNetworkTier?: pulumi.Input<string>;
    /**
     * A list of URLs of the IP resources to be drained. These IPs must be valid static external IPs that have been assigned to
     * the NAT.
     */
    drainNatIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable Dynamic Port Allocation. If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or
     * equal to 32. If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config. If
     * maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm. If maxPortsPerVm is not
     * set, a maximum of 65536 ports will be allocated to a VM from this NAT config. Mutually exclusive with
     * enableEndpointIndependentMapping.
     */
    enableDynamicPortAllocation?: pulumi.Input<boolean>;
    /**
     * Enable endpoint independent mapping. For more information see the [official
     * documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
     */
    enableEndpointIndependentMapping?: pulumi.Input<boolean>;
    /**
     * Specifies the endpoint Types supported by the NAT Gateway. Supported values include: 'ENDPOINT_TYPE_VM',
     * 'ENDPOINT_TYPE_SWG', 'ENDPOINT_TYPE_MANAGED_PROXY_LB'.
     */
    endpointTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
     */
    icmpIdleTimeoutSec?: pulumi.Input<number>;
    /**
     * Configuration for logging on NAT
     */
    logConfig?: pulumi.Input<inputs.ComputeRouterNatLogConfig>;
    /**
     * Maximum number of ports allocated to a VM from this NAT. This field can only be set when enableDynamicPortAllocation is
     * enabled.
     */
    maxPortsPerVm?: pulumi.Input<number>;
    /**
     * Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port
     * allocation if not set.
     */
    minPortsPerVm?: pulumi.Input<number>;
    /**
     * Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.
     */
    name?: pulumi.Input<string>;
    /**
     * How external IPs should be allocated for this NAT. Valid values are 'AUTO_ONLY' for only allowing NAT IPs allocated by
     * Google Cloud Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY",
     * "AUTO_ONLY"]
     */
    natIpAllocateOption?: pulumi.Input<string>;
    /**
     * Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.
     */
    natIps?: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    /**
     * Region where the router and NAT reside.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the Cloud Router in which this NAT will be configured.
     */
    router?: pulumi.Input<string>;
    /**
     * A list of rules associated with this NAT.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.ComputeRouterNatRule>[]>;
    /**
     * How NAT should be configured per Subnetwork. If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the IP ranges in every
     * Subnetwork are allowed to Nat. If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP ranges in every
     * Subnetwork are allowed to Nat. 'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat (specified in the field
     * subnetwork below). Note that if this field contains ALL_SUBNETWORKS_ALL_IP_RANGES or
     * ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any other RouterNat section in any Router for this
     * network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES",
     * "LIST_OF_SUBNETWORKS"]
     */
    sourceSubnetworkIpRangesToNat?: pulumi.Input<string>;
    /**
     * One or more subnetwork NAT configurations. Only used if 'source_subnetwork_ip_ranges_to_nat' is set to
     * 'LIST_OF_SUBNETWORKS'
     */
    subnetworks?: pulumi.Input<pulumi.Input<inputs.ComputeRouterNatSubnetwork>[]>;
    /**
     * Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.
     */
    tcpEstablishedIdleTimeoutSec?: pulumi.Input<number>;
    /**
     * Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.
     */
    tcpTimeWaitTimeoutSec?: pulumi.Input<number>;
    /**
     * Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.
     */
    tcpTransitoryIdleTimeoutSec?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ComputeRouterNatTimeouts>;
    /**
     * Indicates whether this NAT is used for public or private IP translation. If unspecified, it defaults to PUBLIC. If
     * 'PUBLIC' NAT used for public IP translation. If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC"
     * Possible values: ["PUBLIC", "PRIVATE"]
     */
    type?: pulumi.Input<string>;
    /**
     * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
     */
    udpIdleTimeoutSec?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ComputeRouterNat resource.
 */
export interface ComputeRouterNatArgs {
    /**
     * The network tier to use when automatically reserving NAT IP addresses. Must be one of: PREMIUM, STANDARD. If not
     * specified, then the current project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]
     */
    autoNetworkTier?: pulumi.Input<string>;
    /**
     * A list of URLs of the IP resources to be drained. These IPs must be valid static external IPs that have been assigned to
     * the NAT.
     */
    drainNatIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable Dynamic Port Allocation. If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or
     * equal to 32. If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config. If
     * maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm. If maxPortsPerVm is not
     * set, a maximum of 65536 ports will be allocated to a VM from this NAT config. Mutually exclusive with
     * enableEndpointIndependentMapping.
     */
    enableDynamicPortAllocation?: pulumi.Input<boolean>;
    /**
     * Enable endpoint independent mapping. For more information see the [official
     * documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
     */
    enableEndpointIndependentMapping?: pulumi.Input<boolean>;
    /**
     * Specifies the endpoint Types supported by the NAT Gateway. Supported values include: 'ENDPOINT_TYPE_VM',
     * 'ENDPOINT_TYPE_SWG', 'ENDPOINT_TYPE_MANAGED_PROXY_LB'.
     */
    endpointTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
     */
    icmpIdleTimeoutSec?: pulumi.Input<number>;
    /**
     * Configuration for logging on NAT
     */
    logConfig?: pulumi.Input<inputs.ComputeRouterNatLogConfig>;
    /**
     * Maximum number of ports allocated to a VM from this NAT. This field can only be set when enableDynamicPortAllocation is
     * enabled.
     */
    maxPortsPerVm?: pulumi.Input<number>;
    /**
     * Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port
     * allocation if not set.
     */
    minPortsPerVm?: pulumi.Input<number>;
    /**
     * Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.
     */
    name?: pulumi.Input<string>;
    /**
     * How external IPs should be allocated for this NAT. Valid values are 'AUTO_ONLY' for only allowing NAT IPs allocated by
     * Google Cloud Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY",
     * "AUTO_ONLY"]
     */
    natIpAllocateOption?: pulumi.Input<string>;
    /**
     * Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.
     */
    natIps?: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    /**
     * Region where the router and NAT reside.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the Cloud Router in which this NAT will be configured.
     */
    router: pulumi.Input<string>;
    /**
     * A list of rules associated with this NAT.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.ComputeRouterNatRule>[]>;
    /**
     * How NAT should be configured per Subnetwork. If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the IP ranges in every
     * Subnetwork are allowed to Nat. If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP ranges in every
     * Subnetwork are allowed to Nat. 'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat (specified in the field
     * subnetwork below). Note that if this field contains ALL_SUBNETWORKS_ALL_IP_RANGES or
     * ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any other RouterNat section in any Router for this
     * network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES",
     * "LIST_OF_SUBNETWORKS"]
     */
    sourceSubnetworkIpRangesToNat: pulumi.Input<string>;
    /**
     * One or more subnetwork NAT configurations. Only used if 'source_subnetwork_ip_ranges_to_nat' is set to
     * 'LIST_OF_SUBNETWORKS'
     */
    subnetworks?: pulumi.Input<pulumi.Input<inputs.ComputeRouterNatSubnetwork>[]>;
    /**
     * Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.
     */
    tcpEstablishedIdleTimeoutSec?: pulumi.Input<number>;
    /**
     * Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.
     */
    tcpTimeWaitTimeoutSec?: pulumi.Input<number>;
    /**
     * Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.
     */
    tcpTransitoryIdleTimeoutSec?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ComputeRouterNatTimeouts>;
    /**
     * Indicates whether this NAT is used for public or private IP translation. If unspecified, it defaults to PUBLIC. If
     * 'PUBLIC' NAT used for public IP translation. If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC"
     * Possible values: ["PUBLIC", "PRIVATE"]
     */
    type?: pulumi.Input<string>;
    /**
     * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
     */
    udpIdleTimeoutSec?: pulumi.Input<number>;
}
