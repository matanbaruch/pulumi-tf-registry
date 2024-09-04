// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LbaasLoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LbaasLoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbaasLoadBalancerState, opts?: pulumi.CustomResourceOptions): LbaasLoadBalancer {
        return new LbaasLoadBalancer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opc:index/lbaasLoadBalancer:LbaasLoadBalancer';

    /**
     * Returns true if the given object is an instance of LbaasLoadBalancer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbaasLoadBalancer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbaasLoadBalancer.__pulumiType;
    }

    public /*out*/ readonly balancerVips!: pulumi.Output<string[]>;
    public /*out*/ readonly canonicalHostName!: pulumi.Output<string>;
    public /*out*/ readonly cloudgateCapable!: pulumi.Output<boolean>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly ipNetwork!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly parentLoadBalancer!: pulumi.Output<string | undefined>;
    public readonly permittedClients!: pulumi.Output<string[] | undefined>;
    public readonly permittedMethods!: pulumi.Output<string[] | undefined>;
    public readonly policies!: pulumi.Output<string[] | undefined>;
    public readonly region!: pulumi.Output<string>;
    public readonly scheme!: pulumi.Output<string>;
    public readonly serverPool!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly uri!: pulumi.Output<string>;

    /**
     * Create a LbaasLoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbaasLoadBalancerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbaasLoadBalancerArgs | LbaasLoadBalancerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbaasLoadBalancerState | undefined;
            resourceInputs["balancerVips"] = state ? state.balancerVips : undefined;
            resourceInputs["canonicalHostName"] = state ? state.canonicalHostName : undefined;
            resourceInputs["cloudgateCapable"] = state ? state.cloudgateCapable : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["ipNetwork"] = state ? state.ipNetwork : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentLoadBalancer"] = state ? state.parentLoadBalancer : undefined;
            resourceInputs["permittedClients"] = state ? state.permittedClients : undefined;
            resourceInputs["permittedMethods"] = state ? state.permittedMethods : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["scheme"] = state ? state.scheme : undefined;
            resourceInputs["serverPool"] = state ? state.serverPool : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as LbaasLoadBalancerArgs | undefined;
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.scheme === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheme'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["ipNetwork"] = args ? args.ipNetwork : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentLoadBalancer"] = args ? args.parentLoadBalancer : undefined;
            resourceInputs["permittedClients"] = args ? args.permittedClients : undefined;
            resourceInputs["permittedMethods"] = args ? args.permittedMethods : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["scheme"] = args ? args.scheme : undefined;
            resourceInputs["serverPool"] = args ? args.serverPool : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["balancerVips"] = undefined /*out*/;
            resourceInputs["canonicalHostName"] = undefined /*out*/;
            resourceInputs["cloudgateCapable"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbaasLoadBalancer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbaasLoadBalancer resources.
 */
export interface LbaasLoadBalancerState {
    balancerVips?: pulumi.Input<pulumi.Input<string>[]>;
    canonicalHostName?: pulumi.Input<string>;
    cloudgateCapable?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    ipNetwork?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentLoadBalancer?: pulumi.Input<string>;
    permittedClients?: pulumi.Input<pulumi.Input<string>[]>;
    permittedMethods?: pulumi.Input<pulumi.Input<string>[]>;
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    region?: pulumi.Input<string>;
    scheme?: pulumi.Input<string>;
    serverPool?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LbaasLoadBalancer resource.
 */
export interface LbaasLoadBalancerArgs {
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    ipNetwork?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentLoadBalancer?: pulumi.Input<string>;
    permittedClients?: pulumi.Input<pulumi.Input<string>[]>;
    permittedMethods?: pulumi.Input<pulumi.Input<string>[]>;
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    region: pulumi.Input<string>;
    scheme: pulumi.Input<string>;
    serverPool?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
