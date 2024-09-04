// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NicLink extends pulumi.CustomResource {
    /**
     * Get an existing NicLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NicLinkState, opts?: pulumi.CustomResourceOptions): NicLink {
        return new NicLink(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'outscale:index/nicLink:NicLink';

    /**
     * Returns true if the given object is an instance of NicLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NicLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NicLink.__pulumiType;
    }

    public /*out*/ readonly deleteOnVmDeletion!: pulumi.Output<boolean>;
    public readonly deviceNumber!: pulumi.Output<number>;
    public /*out*/ readonly linkNicId!: pulumi.Output<string>;
    public readonly nicId!: pulumi.Output<string>;
    public /*out*/ readonly requestId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly vmAccountId!: pulumi.Output<string>;
    public readonly vmId!: pulumi.Output<string>;

    /**
     * Create a NicLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NicLinkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NicLinkArgs | NicLinkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NicLinkState | undefined;
            resourceInputs["deleteOnVmDeletion"] = state ? state.deleteOnVmDeletion : undefined;
            resourceInputs["deviceNumber"] = state ? state.deviceNumber : undefined;
            resourceInputs["linkNicId"] = state ? state.linkNicId : undefined;
            resourceInputs["nicId"] = state ? state.nicId : undefined;
            resourceInputs["requestId"] = state ? state.requestId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["vmAccountId"] = state ? state.vmAccountId : undefined;
            resourceInputs["vmId"] = state ? state.vmId : undefined;
        } else {
            const args = argsOrState as NicLinkArgs | undefined;
            if ((!args || args.deviceNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceNumber'");
            }
            if ((!args || args.nicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nicId'");
            }
            if ((!args || args.vmId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmId'");
            }
            resourceInputs["deviceNumber"] = args ? args.deviceNumber : undefined;
            resourceInputs["nicId"] = args ? args.nicId : undefined;
            resourceInputs["vmId"] = args ? args.vmId : undefined;
            resourceInputs["deleteOnVmDeletion"] = undefined /*out*/;
            resourceInputs["linkNicId"] = undefined /*out*/;
            resourceInputs["requestId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["vmAccountId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NicLink.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NicLink resources.
 */
export interface NicLinkState {
    deleteOnVmDeletion?: pulumi.Input<boolean>;
    deviceNumber?: pulumi.Input<number>;
    linkNicId?: pulumi.Input<string>;
    nicId?: pulumi.Input<string>;
    requestId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    vmAccountId?: pulumi.Input<string>;
    vmId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NicLink resource.
 */
export interface NicLinkArgs {
    deviceNumber: pulumi.Input<number>;
    nicId: pulumi.Input<string>;
    vmId: pulumi.Input<string>;
}
