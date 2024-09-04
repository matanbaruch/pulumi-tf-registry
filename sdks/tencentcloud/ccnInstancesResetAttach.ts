// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CcnInstancesResetAttach extends pulumi.CustomResource {
    /**
     * Get an existing CcnInstancesResetAttach resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CcnInstancesResetAttachState, opts?: pulumi.CustomResourceOptions): CcnInstancesResetAttach {
        return new CcnInstancesResetAttach(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/ccnInstancesResetAttach:CcnInstancesResetAttach';

    /**
     * Returns true if the given object is an instance of CcnInstancesResetAttach.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CcnInstancesResetAttach {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CcnInstancesResetAttach.__pulumiType;
    }

    /**
     * CCN Instance ID.
     */
    public readonly ccnId!: pulumi.Output<string>;
    /**
     * CCN Uin (root account).
     */
    public readonly ccnUin!: pulumi.Output<string>;
    /**
     * List Of Attachment Instances.
     */
    public readonly instances!: pulumi.Output<outputs.CcnInstancesResetAttachInstance[]>;

    /**
     * Create a CcnInstancesResetAttach resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CcnInstancesResetAttachArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CcnInstancesResetAttachArgs | CcnInstancesResetAttachState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CcnInstancesResetAttachState | undefined;
            resourceInputs["ccnId"] = state ? state.ccnId : undefined;
            resourceInputs["ccnUin"] = state ? state.ccnUin : undefined;
            resourceInputs["instances"] = state ? state.instances : undefined;
        } else {
            const args = argsOrState as CcnInstancesResetAttachArgs | undefined;
            if ((!args || args.ccnId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ccnId'");
            }
            if ((!args || args.ccnUin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ccnUin'");
            }
            if ((!args || args.instances === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instances'");
            }
            resourceInputs["ccnId"] = args ? args.ccnId : undefined;
            resourceInputs["ccnUin"] = args ? args.ccnUin : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CcnInstancesResetAttach.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CcnInstancesResetAttach resources.
 */
export interface CcnInstancesResetAttachState {
    /**
     * CCN Instance ID.
     */
    ccnId?: pulumi.Input<string>;
    /**
     * CCN Uin (root account).
     */
    ccnUin?: pulumi.Input<string>;
    /**
     * List Of Attachment Instances.
     */
    instances?: pulumi.Input<pulumi.Input<inputs.CcnInstancesResetAttachInstance>[]>;
}

/**
 * The set of arguments for constructing a CcnInstancesResetAttach resource.
 */
export interface CcnInstancesResetAttachArgs {
    /**
     * CCN Instance ID.
     */
    ccnId: pulumi.Input<string>;
    /**
     * CCN Uin (root account).
     */
    ccnUin: pulumi.Input<string>;
    /**
     * List Of Attachment Instances.
     */
    instances: pulumi.Input<pulumi.Input<inputs.CcnInstancesResetAttachInstance>[]>;
}
