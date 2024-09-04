// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CognitoUserPoolUserToGroupAttachment extends pulumi.CustomResource {
    /**
     * Get an existing CognitoUserPoolUserToGroupAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CognitoUserPoolUserToGroupAttachmentState, opts?: pulumi.CustomResourceOptions): CognitoUserPoolUserToGroupAttachment {
        return new CognitoUserPoolUserToGroupAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/cognitoUserPoolUserToGroupAttachment:CognitoUserPoolUserToGroupAttachment';

    /**
     * Returns true if the given object is an instance of CognitoUserPoolUserToGroupAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CognitoUserPoolUserToGroupAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CognitoUserPoolUserToGroupAttachment.__pulumiType;
    }

    public readonly groupName!: pulumi.Output<string>;
    public readonly userPoolId!: pulumi.Output<string>;
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a CognitoUserPoolUserToGroupAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CognitoUserPoolUserToGroupAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CognitoUserPoolUserToGroupAttachmentArgs | CognitoUserPoolUserToGroupAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CognitoUserPoolUserToGroupAttachmentState | undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["userPoolId"] = state ? state.userPoolId : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as CognitoUserPoolUserToGroupAttachmentArgs | undefined;
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            if ((!args || args.userPoolId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userPoolId'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["userPoolId"] = args ? args.userPoolId : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CognitoUserPoolUserToGroupAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CognitoUserPoolUserToGroupAttachment resources.
 */
export interface CognitoUserPoolUserToGroupAttachmentState {
    groupName?: pulumi.Input<string>;
    userPoolId?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CognitoUserPoolUserToGroupAttachment resource.
 */
export interface CognitoUserPoolUserToGroupAttachmentArgs {
    groupName: pulumi.Input<string>;
    userPoolId: pulumi.Input<string>;
    username: pulumi.Input<string>;
}
