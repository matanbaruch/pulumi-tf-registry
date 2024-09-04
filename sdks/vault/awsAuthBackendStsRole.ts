// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AwsAuthBackendStsRole extends pulumi.CustomResource {
    /**
     * Get an existing AwsAuthBackendStsRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AwsAuthBackendStsRoleState, opts?: pulumi.CustomResourceOptions): AwsAuthBackendStsRole {
        return new AwsAuthBackendStsRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/awsAuthBackendStsRole:AwsAuthBackendStsRole';

    /**
     * Returns true if the given object is an instance of AwsAuthBackendStsRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AwsAuthBackendStsRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AwsAuthBackendStsRole.__pulumiType;
    }

    /**
     * AWS account ID to be associated with STS role.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * Unique name of the auth backend to configure.
     */
    public readonly backend!: pulumi.Output<string | undefined>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * AWS ARN for STS role to be assumed when interacting with the account specified.
     */
    public readonly stsRole!: pulumi.Output<string>;

    /**
     * Create a AwsAuthBackendStsRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwsAuthBackendStsRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AwsAuthBackendStsRoleArgs | AwsAuthBackendStsRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AwsAuthBackendStsRoleState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["stsRole"] = state ? state.stsRole : undefined;
        } else {
            const args = argsOrState as AwsAuthBackendStsRoleArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.stsRole === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stsRole'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["stsRole"] = args ? args.stsRole : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AwsAuthBackendStsRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AwsAuthBackendStsRole resources.
 */
export interface AwsAuthBackendStsRoleState {
    /**
     * AWS account ID to be associated with STS role.
     */
    accountId?: pulumi.Input<string>;
    /**
     * Unique name of the auth backend to configure.
     */
    backend?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * AWS ARN for STS role to be assumed when interacting with the account specified.
     */
    stsRole?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AwsAuthBackendStsRole resource.
 */
export interface AwsAuthBackendStsRoleArgs {
    /**
     * AWS account ID to be associated with STS role.
     */
    accountId: pulumi.Input<string>;
    /**
     * Unique name of the auth backend to configure.
     */
    backend?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * AWS ARN for STS role to be assumed when interacting with the account specified.
     */
    stsRole: pulumi.Input<string>;
}
