// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IotwirelessPartnerAccount extends pulumi.CustomResource {
    /**
     * Get an existing IotwirelessPartnerAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotwirelessPartnerAccountState, opts?: pulumi.CustomResourceOptions): IotwirelessPartnerAccount {
        return new IotwirelessPartnerAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/iotwirelessPartnerAccount:IotwirelessPartnerAccount';

    /**
     * Returns true if the given object is an instance of IotwirelessPartnerAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotwirelessPartnerAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotwirelessPartnerAccount.__pulumiType;
    }

    /**
     * Whether the partner account is linked to the AWS account.
     */
    public readonly accountLinked!: pulumi.Output<boolean>;
    /**
     * PartnerAccount arn. Returned after successful create.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The fingerprint of the Sidewalk application server private key.
     */
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    /**
     * The partner account ID to disassociate from the AWS account
     */
    public readonly partnerAccountId!: pulumi.Output<string>;
    /**
     * The partner type
     */
    public readonly partnerType!: pulumi.Output<string>;
    /**
     * The Sidewalk account credentials.
     */
    public readonly sidewalk!: pulumi.Output<outputs.IotwirelessPartnerAccountSidewalk>;
    /**
     * The Sidewalk account credentials.
     */
    public readonly sidewalkResponse!: pulumi.Output<outputs.IotwirelessPartnerAccountSidewalkResponse>;
    /**
     * The Sidewalk account credentials.
     */
    public readonly sidewalkUpdate!: pulumi.Output<outputs.IotwirelessPartnerAccountSidewalkUpdate>;
    /**
     * A list of key-value pairs that contain metadata for the destination.
     */
    public readonly tags!: pulumi.Output<outputs.IotwirelessPartnerAccountTag[]>;

    /**
     * Create a IotwirelessPartnerAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IotwirelessPartnerAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotwirelessPartnerAccountArgs | IotwirelessPartnerAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotwirelessPartnerAccountState | undefined;
            resourceInputs["accountLinked"] = state ? state.accountLinked : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["partnerAccountId"] = state ? state.partnerAccountId : undefined;
            resourceInputs["partnerType"] = state ? state.partnerType : undefined;
            resourceInputs["sidewalk"] = state ? state.sidewalk : undefined;
            resourceInputs["sidewalkResponse"] = state ? state.sidewalkResponse : undefined;
            resourceInputs["sidewalkUpdate"] = state ? state.sidewalkUpdate : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IotwirelessPartnerAccountArgs | undefined;
            resourceInputs["accountLinked"] = args ? args.accountLinked : undefined;
            resourceInputs["partnerAccountId"] = args ? args.partnerAccountId : undefined;
            resourceInputs["partnerType"] = args ? args.partnerType : undefined;
            resourceInputs["sidewalk"] = args ? args.sidewalk : undefined;
            resourceInputs["sidewalkResponse"] = args ? args.sidewalkResponse : undefined;
            resourceInputs["sidewalkUpdate"] = args ? args.sidewalkUpdate : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["fingerprint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotwirelessPartnerAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotwirelessPartnerAccount resources.
 */
export interface IotwirelessPartnerAccountState {
    /**
     * Whether the partner account is linked to the AWS account.
     */
    accountLinked?: pulumi.Input<boolean>;
    /**
     * PartnerAccount arn. Returned after successful create.
     */
    arn?: pulumi.Input<string>;
    /**
     * The fingerprint of the Sidewalk application server private key.
     */
    fingerprint?: pulumi.Input<string>;
    /**
     * The partner account ID to disassociate from the AWS account
     */
    partnerAccountId?: pulumi.Input<string>;
    /**
     * The partner type
     */
    partnerType?: pulumi.Input<string>;
    /**
     * The Sidewalk account credentials.
     */
    sidewalk?: pulumi.Input<inputs.IotwirelessPartnerAccountSidewalk>;
    /**
     * The Sidewalk account credentials.
     */
    sidewalkResponse?: pulumi.Input<inputs.IotwirelessPartnerAccountSidewalkResponse>;
    /**
     * The Sidewalk account credentials.
     */
    sidewalkUpdate?: pulumi.Input<inputs.IotwirelessPartnerAccountSidewalkUpdate>;
    /**
     * A list of key-value pairs that contain metadata for the destination.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IotwirelessPartnerAccountTag>[]>;
}

/**
 * The set of arguments for constructing a IotwirelessPartnerAccount resource.
 */
export interface IotwirelessPartnerAccountArgs {
    /**
     * Whether the partner account is linked to the AWS account.
     */
    accountLinked?: pulumi.Input<boolean>;
    /**
     * The partner account ID to disassociate from the AWS account
     */
    partnerAccountId?: pulumi.Input<string>;
    /**
     * The partner type
     */
    partnerType?: pulumi.Input<string>;
    /**
     * The Sidewalk account credentials.
     */
    sidewalk?: pulumi.Input<inputs.IotwirelessPartnerAccountSidewalk>;
    /**
     * The Sidewalk account credentials.
     */
    sidewalkResponse?: pulumi.Input<inputs.IotwirelessPartnerAccountSidewalkResponse>;
    /**
     * The Sidewalk account credentials.
     */
    sidewalkUpdate?: pulumi.Input<inputs.IotwirelessPartnerAccountSidewalkUpdate>;
    /**
     * A list of key-value pairs that contain metadata for the destination.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IotwirelessPartnerAccountTag>[]>;
}
