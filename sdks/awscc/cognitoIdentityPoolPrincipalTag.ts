// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CognitoIdentityPoolPrincipalTag extends pulumi.CustomResource {
    /**
     * Get an existing CognitoIdentityPoolPrincipalTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CognitoIdentityPoolPrincipalTagState, opts?: pulumi.CustomResourceOptions): CognitoIdentityPoolPrincipalTag {
        return new CognitoIdentityPoolPrincipalTag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/cognitoIdentityPoolPrincipalTag:CognitoIdentityPoolPrincipalTag';

    /**
     * Returns true if the given object is an instance of CognitoIdentityPoolPrincipalTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CognitoIdentityPoolPrincipalTag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CognitoIdentityPoolPrincipalTag.__pulumiType;
    }

    public readonly identityPoolId!: pulumi.Output<string>;
    public readonly identityProviderName!: pulumi.Output<string>;
    public readonly principalTags!: pulumi.Output<string>;
    public readonly useDefaults!: pulumi.Output<boolean>;

    /**
     * Create a CognitoIdentityPoolPrincipalTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CognitoIdentityPoolPrincipalTagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CognitoIdentityPoolPrincipalTagArgs | CognitoIdentityPoolPrincipalTagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CognitoIdentityPoolPrincipalTagState | undefined;
            resourceInputs["identityPoolId"] = state ? state.identityPoolId : undefined;
            resourceInputs["identityProviderName"] = state ? state.identityProviderName : undefined;
            resourceInputs["principalTags"] = state ? state.principalTags : undefined;
            resourceInputs["useDefaults"] = state ? state.useDefaults : undefined;
        } else {
            const args = argsOrState as CognitoIdentityPoolPrincipalTagArgs | undefined;
            if ((!args || args.identityPoolId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityPoolId'");
            }
            if ((!args || args.identityProviderName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityProviderName'");
            }
            resourceInputs["identityPoolId"] = args ? args.identityPoolId : undefined;
            resourceInputs["identityProviderName"] = args ? args.identityProviderName : undefined;
            resourceInputs["principalTags"] = args ? args.principalTags : undefined;
            resourceInputs["useDefaults"] = args ? args.useDefaults : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CognitoIdentityPoolPrincipalTag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CognitoIdentityPoolPrincipalTag resources.
 */
export interface CognitoIdentityPoolPrincipalTagState {
    identityPoolId?: pulumi.Input<string>;
    identityProviderName?: pulumi.Input<string>;
    principalTags?: pulumi.Input<string>;
    useDefaults?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a CognitoIdentityPoolPrincipalTag resource.
 */
export interface CognitoIdentityPoolPrincipalTagArgs {
    identityPoolId: pulumi.Input<string>;
    identityProviderName: pulumi.Input<string>;
    principalTags?: pulumi.Input<string>;
    useDefaults?: pulumi.Input<boolean>;
}
