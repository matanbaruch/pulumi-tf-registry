// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcStaticRoutes extends pulumi.CustomResource {
    /**
     * Get an existing VpcStaticRoutes resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcStaticRoutesState, opts?: pulumi.CustomResourceOptions): VpcStaticRoutes {
        return new VpcStaticRoutes(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt-virtual-private-cloud:index/vpcStaticRoutes:VpcStaticRoutes';

    /**
     * Returns true if the given object is an instance of VpcStaticRoutes.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcStaticRoutes {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcStaticRoutes.__pulumiType;
    }

    public /*out*/ readonly _revision!: pulumi.Output<number>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly network!: pulumi.Output<string>;
    public readonly nextHops!: pulumi.Output<outputs.VpcStaticRoutesNextHop[]>;
    public readonly nsxId!: pulumi.Output<string>;
    public /*out*/ readonly path!: pulumi.Output<string>;
    public readonly resourceType!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.VpcStaticRoutesTag[] | undefined>;

    /**
     * Create a VpcStaticRoutes resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcStaticRoutesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcStaticRoutesArgs | VpcStaticRoutesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcStaticRoutesState | undefined;
            resourceInputs["_revision"] = state ? state._revision : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["nextHops"] = state ? state.nextHops : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as VpcStaticRoutesArgs | undefined;
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            if ((!args || args.nextHops === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nextHops'");
            }
            if ((!args || args.nsxId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nsxId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["nextHops"] = args ? args.nextHops : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["_revision"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcStaticRoutes.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcStaticRoutes resources.
 */
export interface VpcStaticRoutesState {
    _revision?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    network?: pulumi.Input<string>;
    nextHops?: pulumi.Input<pulumi.Input<inputs.VpcStaticRoutesNextHop>[]>;
    nsxId?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.VpcStaticRoutesTag>[]>;
}

/**
 * The set of arguments for constructing a VpcStaticRoutes resource.
 */
export interface VpcStaticRoutesArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    network: pulumi.Input<string>;
    nextHops: pulumi.Input<pulumi.Input<inputs.VpcStaticRoutesNextHop>[]>;
    nsxId: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.VpcStaticRoutesTag>[]>;
}
