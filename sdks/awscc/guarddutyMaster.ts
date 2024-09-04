// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GuarddutyMaster extends pulumi.CustomResource {
    /**
     * Get an existing GuarddutyMaster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GuarddutyMasterState, opts?: pulumi.CustomResourceOptions): GuarddutyMaster {
        return new GuarddutyMaster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/guarddutyMaster:GuarddutyMaster';

    /**
     * Returns true if the given object is an instance of GuarddutyMaster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuarddutyMaster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuarddutyMaster.__pulumiType;
    }

    /**
     * Unique ID of the detector of the GuardDuty member account.
     */
    public readonly detectorId!: pulumi.Output<string>;
    /**
     * Value used to validate the master account to the member account.
     */
    public readonly invitationId!: pulumi.Output<string>;
    /**
     * ID of the account used as the master account.
     */
    public readonly masterId!: pulumi.Output<string>;

    /**
     * Create a GuarddutyMaster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuarddutyMasterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GuarddutyMasterArgs | GuarddutyMasterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GuarddutyMasterState | undefined;
            resourceInputs["detectorId"] = state ? state.detectorId : undefined;
            resourceInputs["invitationId"] = state ? state.invitationId : undefined;
            resourceInputs["masterId"] = state ? state.masterId : undefined;
        } else {
            const args = argsOrState as GuarddutyMasterArgs | undefined;
            if ((!args || args.detectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'detectorId'");
            }
            if ((!args || args.masterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'masterId'");
            }
            resourceInputs["detectorId"] = args ? args.detectorId : undefined;
            resourceInputs["invitationId"] = args ? args.invitationId : undefined;
            resourceInputs["masterId"] = args ? args.masterId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GuarddutyMaster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GuarddutyMaster resources.
 */
export interface GuarddutyMasterState {
    /**
     * Unique ID of the detector of the GuardDuty member account.
     */
    detectorId?: pulumi.Input<string>;
    /**
     * Value used to validate the master account to the member account.
     */
    invitationId?: pulumi.Input<string>;
    /**
     * ID of the account used as the master account.
     */
    masterId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GuarddutyMaster resource.
 */
export interface GuarddutyMasterArgs {
    /**
     * Unique ID of the detector of the GuardDuty member account.
     */
    detectorId: pulumi.Input<string>;
    /**
     * Value used to validate the master account to the member account.
     */
    invitationId?: pulumi.Input<string>;
    /**
     * ID of the account used as the master account.
     */
    masterId: pulumi.Input<string>;
}
