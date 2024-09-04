// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccountAttachment extends pulumi.CustomResource {
    /**
     * Get an existing AccountAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountAttachmentState, opts?: pulumi.CustomResourceOptions): AccountAttachment {
        return new AccountAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdm:index/accountAttachment:AccountAttachment';

    /**
     * Returns true if the given object is an instance of AccountAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccountAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccountAttachment.__pulumiType;
    }

    /**
     * The id of the account of this AccountAttachment.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * The id of the attached role of this AccountAttachment.
     */
    public readonly roleId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AccountAttachmentTimeouts | undefined>;

    /**
     * Create a AccountAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountAttachmentArgs | AccountAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccountAttachmentState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["roleId"] = state ? state.roleId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AccountAttachmentArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.roleId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleId'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["roleId"] = args ? args.roleId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccountAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccountAttachment resources.
 */
export interface AccountAttachmentState {
    /**
     * The id of the account of this AccountAttachment.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The id of the attached role of this AccountAttachment.
     */
    roleId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccountAttachmentTimeouts>;
}

/**
 * The set of arguments for constructing a AccountAttachment resource.
 */
export interface AccountAttachmentArgs {
    /**
     * The id of the account of this AccountAttachment.
     */
    accountId: pulumi.Input<string>;
    /**
     * The id of the attached role of this AccountAttachment.
     */
    roleId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccountAttachmentTimeouts>;
}
