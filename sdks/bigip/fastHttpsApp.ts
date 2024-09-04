// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FastHttpsApp extends pulumi.CustomResource {
    /**
     * Get an existing FastHttpsApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FastHttpsAppState, opts?: pulumi.CustomResourceOptions): FastHttpsApp {
        return new FastHttpsApp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bigip:index/fastHttpsApp:FastHttpsApp';

    /**
     * Returns true if the given object is an instance of FastHttpsApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FastHttpsApp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FastHttpsApp.__pulumiType;
    }

    /**
     * Name of FAST HTTPS application.
     */
    public readonly application!: pulumi.Output<string>;
    public readonly endpointLtmPolicies!: pulumi.Output<string[] | undefined>;
    /**
     * Select an existing BIG-IP HTTPS pool monitor. Monitors are used to determine the health of the application on each
     * server
     */
    public readonly existingMonitor!: pulumi.Output<string | undefined>;
    /**
     * Select an existing BIG-IP Pool
     */
    public readonly existingPool!: pulumi.Output<string | undefined>;
    /**
     * name of an existing BIG-IP SNAT pool
     */
    public readonly existingSnatPool!: pulumi.Output<string | undefined>;
    /**
     * Select an existing TLS client profile
     */
    public readonly existingTlsClientProfile!: pulumi.Output<string | undefined>;
    /**
     * Select an existing TLS server profile
     */
    public readonly existingTlsServerProfile!: pulumi.Output<string | undefined>;
    public readonly existingWafSecurityPolicy!: pulumi.Output<string | undefined>;
    /**
     * Type of fallback persistence record to be created for each new client connection.
     */
    public readonly fallbackPersistence!: pulumi.Output<string | undefined>;
    /**
     * Json payload for FAST HTTPS application.
     */
    public /*out*/ readonly fastHttpsJson!: pulumi.Output<string>;
    /**
     * none
     */
    public readonly loadBalancingMode!: pulumi.Output<string | undefined>;
    /**
     * foo
     */
    public readonly monitor!: pulumi.Output<outputs.FastHttpsAppMonitor | undefined>;
    /**
     * Name of an existing BIG-IP persistence profile to be used.
     */
    public readonly persistenceProfile!: pulumi.Output<string | undefined>;
    /**
     * Type of persistence profile to be created.
     */
    public readonly persistenceType!: pulumi.Output<string | undefined>;
    public readonly poolMembers!: pulumi.Output<outputs.FastHttpsAppPoolMember[] | undefined>;
    public readonly securityLogProfiles!: pulumi.Output<string[] | undefined>;
    public readonly serviceDiscoveries!: pulumi.Output<string[] | undefined>;
    /**
     * none
     */
    public readonly slowRampTime!: pulumi.Output<number | undefined>;
    public readonly snatPoolAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * Name of FAST HTTPS application tenant.
     */
    public readonly tenant!: pulumi.Output<string>;
    public readonly tlsClientProfile!: pulumi.Output<outputs.FastHttpsAppTlsClientProfile | undefined>;
    public readonly tlsServerProfile!: pulumi.Output<outputs.FastHttpsAppTlsServerProfile | undefined>;
    public readonly virtualServer!: pulumi.Output<outputs.FastHttpsAppVirtualServer | undefined>;
    public readonly wafSecurityPolicy!: pulumi.Output<outputs.FastHttpsAppWafSecurityPolicy | undefined>;

    /**
     * Create a FastHttpsApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FastHttpsAppArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FastHttpsAppArgs | FastHttpsAppState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FastHttpsAppState | undefined;
            resourceInputs["application"] = state ? state.application : undefined;
            resourceInputs["endpointLtmPolicies"] = state ? state.endpointLtmPolicies : undefined;
            resourceInputs["existingMonitor"] = state ? state.existingMonitor : undefined;
            resourceInputs["existingPool"] = state ? state.existingPool : undefined;
            resourceInputs["existingSnatPool"] = state ? state.existingSnatPool : undefined;
            resourceInputs["existingTlsClientProfile"] = state ? state.existingTlsClientProfile : undefined;
            resourceInputs["existingTlsServerProfile"] = state ? state.existingTlsServerProfile : undefined;
            resourceInputs["existingWafSecurityPolicy"] = state ? state.existingWafSecurityPolicy : undefined;
            resourceInputs["fallbackPersistence"] = state ? state.fallbackPersistence : undefined;
            resourceInputs["fastHttpsJson"] = state ? state.fastHttpsJson : undefined;
            resourceInputs["loadBalancingMode"] = state ? state.loadBalancingMode : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["persistenceProfile"] = state ? state.persistenceProfile : undefined;
            resourceInputs["persistenceType"] = state ? state.persistenceType : undefined;
            resourceInputs["poolMembers"] = state ? state.poolMembers : undefined;
            resourceInputs["securityLogProfiles"] = state ? state.securityLogProfiles : undefined;
            resourceInputs["serviceDiscoveries"] = state ? state.serviceDiscoveries : undefined;
            resourceInputs["slowRampTime"] = state ? state.slowRampTime : undefined;
            resourceInputs["snatPoolAddresses"] = state ? state.snatPoolAddresses : undefined;
            resourceInputs["tenant"] = state ? state.tenant : undefined;
            resourceInputs["tlsClientProfile"] = state ? state.tlsClientProfile : undefined;
            resourceInputs["tlsServerProfile"] = state ? state.tlsServerProfile : undefined;
            resourceInputs["virtualServer"] = state ? state.virtualServer : undefined;
            resourceInputs["wafSecurityPolicy"] = state ? state.wafSecurityPolicy : undefined;
        } else {
            const args = argsOrState as FastHttpsAppArgs | undefined;
            if ((!args || args.application === undefined) && !opts.urn) {
                throw new Error("Missing required property 'application'");
            }
            if ((!args || args.tenant === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenant'");
            }
            resourceInputs["application"] = args ? args.application : undefined;
            resourceInputs["endpointLtmPolicies"] = args ? args.endpointLtmPolicies : undefined;
            resourceInputs["existingMonitor"] = args ? args.existingMonitor : undefined;
            resourceInputs["existingPool"] = args ? args.existingPool : undefined;
            resourceInputs["existingSnatPool"] = args ? args.existingSnatPool : undefined;
            resourceInputs["existingTlsClientProfile"] = args ? args.existingTlsClientProfile : undefined;
            resourceInputs["existingTlsServerProfile"] = args ? args.existingTlsServerProfile : undefined;
            resourceInputs["existingWafSecurityPolicy"] = args ? args.existingWafSecurityPolicy : undefined;
            resourceInputs["fallbackPersistence"] = args ? args.fallbackPersistence : undefined;
            resourceInputs["loadBalancingMode"] = args ? args.loadBalancingMode : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["persistenceProfile"] = args ? args.persistenceProfile : undefined;
            resourceInputs["persistenceType"] = args ? args.persistenceType : undefined;
            resourceInputs["poolMembers"] = args ? args.poolMembers : undefined;
            resourceInputs["securityLogProfiles"] = args ? args.securityLogProfiles : undefined;
            resourceInputs["serviceDiscoveries"] = args ? args.serviceDiscoveries : undefined;
            resourceInputs["slowRampTime"] = args ? args.slowRampTime : undefined;
            resourceInputs["snatPoolAddresses"] = args ? args.snatPoolAddresses : undefined;
            resourceInputs["tenant"] = args ? args.tenant : undefined;
            resourceInputs["tlsClientProfile"] = args ? args.tlsClientProfile : undefined;
            resourceInputs["tlsServerProfile"] = args ? args.tlsServerProfile : undefined;
            resourceInputs["virtualServer"] = args ? args.virtualServer : undefined;
            resourceInputs["wafSecurityPolicy"] = args ? args.wafSecurityPolicy : undefined;
            resourceInputs["fastHttpsJson"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FastHttpsApp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FastHttpsApp resources.
 */
export interface FastHttpsAppState {
    /**
     * Name of FAST HTTPS application.
     */
    application?: pulumi.Input<string>;
    endpointLtmPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Select an existing BIG-IP HTTPS pool monitor. Monitors are used to determine the health of the application on each
     * server
     */
    existingMonitor?: pulumi.Input<string>;
    /**
     * Select an existing BIG-IP Pool
     */
    existingPool?: pulumi.Input<string>;
    /**
     * name of an existing BIG-IP SNAT pool
     */
    existingSnatPool?: pulumi.Input<string>;
    /**
     * Select an existing TLS client profile
     */
    existingTlsClientProfile?: pulumi.Input<string>;
    /**
     * Select an existing TLS server profile
     */
    existingTlsServerProfile?: pulumi.Input<string>;
    existingWafSecurityPolicy?: pulumi.Input<string>;
    /**
     * Type of fallback persistence record to be created for each new client connection.
     */
    fallbackPersistence?: pulumi.Input<string>;
    /**
     * Json payload for FAST HTTPS application.
     */
    fastHttpsJson?: pulumi.Input<string>;
    /**
     * none
     */
    loadBalancingMode?: pulumi.Input<string>;
    /**
     * foo
     */
    monitor?: pulumi.Input<inputs.FastHttpsAppMonitor>;
    /**
     * Name of an existing BIG-IP persistence profile to be used.
     */
    persistenceProfile?: pulumi.Input<string>;
    /**
     * Type of persistence profile to be created.
     */
    persistenceType?: pulumi.Input<string>;
    poolMembers?: pulumi.Input<pulumi.Input<inputs.FastHttpsAppPoolMember>[]>;
    securityLogProfiles?: pulumi.Input<pulumi.Input<string>[]>;
    serviceDiscoveries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * none
     */
    slowRampTime?: pulumi.Input<number>;
    snatPoolAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of FAST HTTPS application tenant.
     */
    tenant?: pulumi.Input<string>;
    tlsClientProfile?: pulumi.Input<inputs.FastHttpsAppTlsClientProfile>;
    tlsServerProfile?: pulumi.Input<inputs.FastHttpsAppTlsServerProfile>;
    virtualServer?: pulumi.Input<inputs.FastHttpsAppVirtualServer>;
    wafSecurityPolicy?: pulumi.Input<inputs.FastHttpsAppWafSecurityPolicy>;
}

/**
 * The set of arguments for constructing a FastHttpsApp resource.
 */
export interface FastHttpsAppArgs {
    /**
     * Name of FAST HTTPS application.
     */
    application: pulumi.Input<string>;
    endpointLtmPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Select an existing BIG-IP HTTPS pool monitor. Monitors are used to determine the health of the application on each
     * server
     */
    existingMonitor?: pulumi.Input<string>;
    /**
     * Select an existing BIG-IP Pool
     */
    existingPool?: pulumi.Input<string>;
    /**
     * name of an existing BIG-IP SNAT pool
     */
    existingSnatPool?: pulumi.Input<string>;
    /**
     * Select an existing TLS client profile
     */
    existingTlsClientProfile?: pulumi.Input<string>;
    /**
     * Select an existing TLS server profile
     */
    existingTlsServerProfile?: pulumi.Input<string>;
    existingWafSecurityPolicy?: pulumi.Input<string>;
    /**
     * Type of fallback persistence record to be created for each new client connection.
     */
    fallbackPersistence?: pulumi.Input<string>;
    /**
     * none
     */
    loadBalancingMode?: pulumi.Input<string>;
    /**
     * foo
     */
    monitor?: pulumi.Input<inputs.FastHttpsAppMonitor>;
    /**
     * Name of an existing BIG-IP persistence profile to be used.
     */
    persistenceProfile?: pulumi.Input<string>;
    /**
     * Type of persistence profile to be created.
     */
    persistenceType?: pulumi.Input<string>;
    poolMembers?: pulumi.Input<pulumi.Input<inputs.FastHttpsAppPoolMember>[]>;
    securityLogProfiles?: pulumi.Input<pulumi.Input<string>[]>;
    serviceDiscoveries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * none
     */
    slowRampTime?: pulumi.Input<number>;
    snatPoolAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of FAST HTTPS application tenant.
     */
    tenant: pulumi.Input<string>;
    tlsClientProfile?: pulumi.Input<inputs.FastHttpsAppTlsClientProfile>;
    tlsServerProfile?: pulumi.Input<inputs.FastHttpsAppTlsServerProfile>;
    virtualServer?: pulumi.Input<inputs.FastHttpsAppVirtualServer>;
    wafSecurityPolicy?: pulumi.Input<inputs.FastHttpsAppWafSecurityPolicy>;
}
