// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IamRolePolicy extends pulumi.CustomResource {
    /**
     * Get an existing IamRolePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamRolePolicyState, opts?: pulumi.CustomResourceOptions): IamRolePolicy {
        return new IamRolePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/iamRolePolicy:IamRolePolicy';

    /**
     * Returns true if the given object is an instance of IamRolePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamRolePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamRolePolicy.__pulumiType;
    }

    /**
     * The policy document. You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you
     * can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to
     * IAM. The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is
     * a string of characters consisting of the following: + Any printable ASCII character ranging from the space character
     * (``\u0020``) through the end of the ASCII character range + The printable characters in the Basic Latin and Latin-1
     * Supplement character set (through ``\u00FF``) + The special characters tab (``\u0009``), line feed (``\u000A``), and
     * carriage return (``\u000D``)
     */
    public readonly policyDocument!: pulumi.Output<string>;
    /**
     * The name of the policy document. This parameter allows (through its [regex
     * pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and
     * lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    public readonly policyName!: pulumi.Output<string>;
    /**
     * The name of the role to associate the policy with. This parameter allows (through its [regex
     * pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and
     * lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    public readonly roleName!: pulumi.Output<string>;

    /**
     * Create a IamRolePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IamRolePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamRolePolicyArgs | IamRolePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamRolePolicyState | undefined;
            resourceInputs["policyDocument"] = state ? state.policyDocument : undefined;
            resourceInputs["policyName"] = state ? state.policyName : undefined;
            resourceInputs["roleName"] = state ? state.roleName : undefined;
        } else {
            const args = argsOrState as IamRolePolicyArgs | undefined;
            if ((!args || args.policyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyName'");
            }
            if ((!args || args.roleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleName'");
            }
            resourceInputs["policyDocument"] = args ? args.policyDocument : undefined;
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamRolePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamRolePolicy resources.
 */
export interface IamRolePolicyState {
    /**
     * The policy document. You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you
     * can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to
     * IAM. The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is
     * a string of characters consisting of the following: + Any printable ASCII character ranging from the space character
     * (``\u0020``) through the end of the ASCII character range + The printable characters in the Basic Latin and Latin-1
     * Supplement character set (through ``\u00FF``) + The special characters tab (``\u0009``), line feed (``\u000A``), and
     * carriage return (``\u000D``)
     */
    policyDocument?: pulumi.Input<string>;
    /**
     * The name of the policy document. This parameter allows (through its [regex
     * pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and
     * lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    policyName?: pulumi.Input<string>;
    /**
     * The name of the role to associate the policy with. This parameter allows (through its [regex
     * pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and
     * lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    roleName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IamRolePolicy resource.
 */
export interface IamRolePolicyArgs {
    /**
     * The policy document. You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you
     * can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to
     * IAM. The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is
     * a string of characters consisting of the following: + Any printable ASCII character ranging from the space character
     * (``\u0020``) through the end of the ASCII character range + The printable characters in the Basic Latin and Latin-1
     * Supplement character set (through ``\u00FF``) + The special characters tab (``\u0009``), line feed (``\u000A``), and
     * carriage return (``\u000D``)
     */
    policyDocument?: pulumi.Input<string>;
    /**
     * The name of the policy document. This parameter allows (through its [regex
     * pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and
     * lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    policyName: pulumi.Input<string>;
    /**
     * The name of the role to associate the policy with. This parameter allows (through its [regex
     * pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and
     * lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    roleName: pulumi.Input<string>;
}
