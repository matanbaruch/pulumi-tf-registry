// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallIpv6ehfilter extends pulumi.CustomResource {
    /**
     * Get an existing FirewallIpv6ehfilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallIpv6ehfilterState, opts?: pulumi.CustomResourceOptions): FirewallIpv6ehfilter {
        return new FirewallIpv6ehfilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/firewallIpv6ehfilter:FirewallIpv6ehfilter';

    /**
     * Returns true if the given object is an instance of FirewallIpv6ehfilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallIpv6ehfilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallIpv6ehfilter.__pulumiType;
    }

    public readonly auth!: pulumi.Output<string | undefined>;
    public readonly destOpt!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly fragment!: pulumi.Output<string>;
    public readonly hdoptTypes!: pulumi.Output<number[]>;
    public readonly hopOpt!: pulumi.Output<string>;
    public readonly noNext!: pulumi.Output<string>;
    public readonly routing!: pulumi.Output<string>;
    public readonly routingTypes!: pulumi.Output<number[]>;

    /**
     * Create a FirewallIpv6ehfilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallIpv6ehfilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallIpv6ehfilterArgs | FirewallIpv6ehfilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallIpv6ehfilterState | undefined;
            resourceInputs["auth"] = state ? state.auth : undefined;
            resourceInputs["destOpt"] = state ? state.destOpt : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["fragment"] = state ? state.fragment : undefined;
            resourceInputs["hdoptTypes"] = state ? state.hdoptTypes : undefined;
            resourceInputs["hopOpt"] = state ? state.hopOpt : undefined;
            resourceInputs["noNext"] = state ? state.noNext : undefined;
            resourceInputs["routing"] = state ? state.routing : undefined;
            resourceInputs["routingTypes"] = state ? state.routingTypes : undefined;
        } else {
            const args = argsOrState as FirewallIpv6ehfilterArgs | undefined;
            resourceInputs["auth"] = args ? args.auth : undefined;
            resourceInputs["destOpt"] = args ? args.destOpt : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["fragment"] = args ? args.fragment : undefined;
            resourceInputs["hdoptTypes"] = args ? args.hdoptTypes : undefined;
            resourceInputs["hopOpt"] = args ? args.hopOpt : undefined;
            resourceInputs["noNext"] = args ? args.noNext : undefined;
            resourceInputs["routing"] = args ? args.routing : undefined;
            resourceInputs["routingTypes"] = args ? args.routingTypes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallIpv6ehfilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallIpv6ehfilter resources.
 */
export interface FirewallIpv6ehfilterState {
    auth?: pulumi.Input<string>;
    destOpt?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    fragment?: pulumi.Input<string>;
    hdoptTypes?: pulumi.Input<pulumi.Input<number>[]>;
    hopOpt?: pulumi.Input<string>;
    noNext?: pulumi.Input<string>;
    routing?: pulumi.Input<string>;
    routingTypes?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a FirewallIpv6ehfilter resource.
 */
export interface FirewallIpv6ehfilterArgs {
    auth?: pulumi.Input<string>;
    destOpt?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    fragment?: pulumi.Input<string>;
    hdoptTypes?: pulumi.Input<pulumi.Input<number>[]>;
    hopOpt?: pulumi.Input<string>;
    noNext?: pulumi.Input<string>;
    routing?: pulumi.Input<string>;
    routingTypes?: pulumi.Input<pulumi.Input<number>[]>;
}
