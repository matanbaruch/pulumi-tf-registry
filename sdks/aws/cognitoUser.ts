// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CognitoUser extends pulumi.CustomResource {
    /**
     * Get an existing CognitoUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CognitoUserState, opts?: pulumi.CustomResourceOptions): CognitoUser {
        return new CognitoUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/cognitoUser:CognitoUser';

    /**
     * Returns true if the given object is an instance of CognitoUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CognitoUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CognitoUser.__pulumiType;
    }

    public readonly attributes!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly clientMetadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    public readonly desiredDeliveryMediums!: pulumi.Output<string[] | undefined>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly forceAliasCreation!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly lastModifiedDate!: pulumi.Output<string>;
    public readonly messageAction!: pulumi.Output<string | undefined>;
    public /*out*/ readonly mfaSettingLists!: pulumi.Output<string[]>;
    public readonly password!: pulumi.Output<string | undefined>;
    public /*out*/ readonly preferredMfaSetting!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly sub!: pulumi.Output<string>;
    public readonly temporaryPassword!: pulumi.Output<string | undefined>;
    public readonly userPoolId!: pulumi.Output<string>;
    public readonly username!: pulumi.Output<string>;
    public readonly validationData!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a CognitoUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CognitoUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CognitoUserArgs | CognitoUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CognitoUserState | undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["clientMetadata"] = state ? state.clientMetadata : undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["desiredDeliveryMediums"] = state ? state.desiredDeliveryMediums : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["forceAliasCreation"] = state ? state.forceAliasCreation : undefined;
            resourceInputs["lastModifiedDate"] = state ? state.lastModifiedDate : undefined;
            resourceInputs["messageAction"] = state ? state.messageAction : undefined;
            resourceInputs["mfaSettingLists"] = state ? state.mfaSettingLists : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["preferredMfaSetting"] = state ? state.preferredMfaSetting : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["sub"] = state ? state.sub : undefined;
            resourceInputs["temporaryPassword"] = state ? state.temporaryPassword : undefined;
            resourceInputs["userPoolId"] = state ? state.userPoolId : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["validationData"] = state ? state.validationData : undefined;
        } else {
            const args = argsOrState as CognitoUserArgs | undefined;
            if ((!args || args.userPoolId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userPoolId'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["clientMetadata"] = args ? args.clientMetadata : undefined;
            resourceInputs["desiredDeliveryMediums"] = args ? args.desiredDeliveryMediums : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["forceAliasCreation"] = args ? args.forceAliasCreation : undefined;
            resourceInputs["messageAction"] = args ? args.messageAction : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["temporaryPassword"] = args?.temporaryPassword ? pulumi.secret(args.temporaryPassword) : undefined;
            resourceInputs["userPoolId"] = args ? args.userPoolId : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["validationData"] = args ? args.validationData : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["lastModifiedDate"] = undefined /*out*/;
            resourceInputs["mfaSettingLists"] = undefined /*out*/;
            resourceInputs["preferredMfaSetting"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["sub"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password", "temporaryPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CognitoUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CognitoUser resources.
 */
export interface CognitoUserState {
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    clientMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    creationDate?: pulumi.Input<string>;
    desiredDeliveryMediums?: pulumi.Input<pulumi.Input<string>[]>;
    enabled?: pulumi.Input<boolean>;
    forceAliasCreation?: pulumi.Input<boolean>;
    lastModifiedDate?: pulumi.Input<string>;
    messageAction?: pulumi.Input<string>;
    mfaSettingLists?: pulumi.Input<pulumi.Input<string>[]>;
    password?: pulumi.Input<string>;
    preferredMfaSetting?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    sub?: pulumi.Input<string>;
    temporaryPassword?: pulumi.Input<string>;
    userPoolId?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    validationData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a CognitoUser resource.
 */
export interface CognitoUserArgs {
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    clientMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    desiredDeliveryMediums?: pulumi.Input<pulumi.Input<string>[]>;
    enabled?: pulumi.Input<boolean>;
    forceAliasCreation?: pulumi.Input<boolean>;
    messageAction?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    temporaryPassword?: pulumi.Input<string>;
    userPoolId: pulumi.Input<string>;
    username: pulumi.Input<string>;
    validationData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
