// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NetworkingRbacPolicyV2 extends pulumi.CustomResource {
    /**
     * Get an existing NetworkingRbacPolicyV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkingRbacPolicyV2State, opts?: pulumi.CustomResourceOptions): NetworkingRbacPolicyV2 {
        return new NetworkingRbacPolicyV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/networkingRbacPolicyV2:NetworkingRbacPolicyV2';

    /**
     * Returns true if the given object is an instance of NetworkingRbacPolicyV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkingRbacPolicyV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkingRbacPolicyV2.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly objectId!: pulumi.Output<string>;
    public readonly objectType!: pulumi.Output<string>;
    public /*out*/ readonly projectId!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly targetTenant!: pulumi.Output<string>;

    /**
     * Create a NetworkingRbacPolicyV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkingRbacPolicyV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkingRbacPolicyV2Args | NetworkingRbacPolicyV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkingRbacPolicyV2State | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["objectId"] = state ? state.objectId : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["targetTenant"] = state ? state.targetTenant : undefined;
        } else {
            const args = argsOrState as NetworkingRbacPolicyV2Args | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.objectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectId'");
            }
            if ((!args || args.objectType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectType'");
            }
            if ((!args || args.targetTenant === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetTenant'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["objectId"] = args ? args.objectId : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["targetTenant"] = args ? args.targetTenant : undefined;
            resourceInputs["projectId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkingRbacPolicyV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkingRbacPolicyV2 resources.
 */
export interface NetworkingRbacPolicyV2State {
    action?: pulumi.Input<string>;
    objectId?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    targetTenant?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkingRbacPolicyV2 resource.
 */
export interface NetworkingRbacPolicyV2Args {
    action: pulumi.Input<string>;
    objectId: pulumi.Input<string>;
    objectType: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    targetTenant: pulumi.Input<string>;
}
