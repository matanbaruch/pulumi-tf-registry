// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AmplifyApp extends pulumi.CustomResource {
    /**
     * Get an existing AmplifyApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AmplifyAppState, opts?: pulumi.CustomResourceOptions): AmplifyApp {
        return new AmplifyApp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/amplifyApp:AmplifyApp';

    /**
     * Returns true if the given object is an instance of AmplifyApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AmplifyApp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AmplifyApp.__pulumiType;
    }

    public readonly accessToken!: pulumi.Output<string>;
    public /*out*/ readonly appId!: pulumi.Output<string>;
    public /*out*/ readonly appName!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly autoBranchCreationConfig!: pulumi.Output<outputs.AmplifyAppAutoBranchCreationConfig>;
    public readonly basicAuthConfig!: pulumi.Output<outputs.AmplifyAppBasicAuthConfig>;
    public readonly buildSpec!: pulumi.Output<string>;
    public readonly customHeaders!: pulumi.Output<string>;
    public readonly customRules!: pulumi.Output<outputs.AmplifyAppCustomRule[]>;
    public /*out*/ readonly defaultDomain!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly enableBranchAutoDeletion!: pulumi.Output<boolean>;
    public readonly environmentVariables!: pulumi.Output<outputs.AmplifyAppEnvironmentVariable[]>;
    public readonly iamServiceRole!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly oauthToken!: pulumi.Output<string>;
    public readonly platform!: pulumi.Output<string>;
    public readonly repository!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.AmplifyAppTag[]>;

    /**
     * Create a AmplifyApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AmplifyAppArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AmplifyAppArgs | AmplifyAppState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AmplifyAppState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["appName"] = state ? state.appName : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["autoBranchCreationConfig"] = state ? state.autoBranchCreationConfig : undefined;
            resourceInputs["basicAuthConfig"] = state ? state.basicAuthConfig : undefined;
            resourceInputs["buildSpec"] = state ? state.buildSpec : undefined;
            resourceInputs["customHeaders"] = state ? state.customHeaders : undefined;
            resourceInputs["customRules"] = state ? state.customRules : undefined;
            resourceInputs["defaultDomain"] = state ? state.defaultDomain : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enableBranchAutoDeletion"] = state ? state.enableBranchAutoDeletion : undefined;
            resourceInputs["environmentVariables"] = state ? state.environmentVariables : undefined;
            resourceInputs["iamServiceRole"] = state ? state.iamServiceRole : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["oauthToken"] = state ? state.oauthToken : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AmplifyAppArgs | undefined;
            resourceInputs["accessToken"] = args ? args.accessToken : undefined;
            resourceInputs["autoBranchCreationConfig"] = args ? args.autoBranchCreationConfig : undefined;
            resourceInputs["basicAuthConfig"] = args ? args.basicAuthConfig : undefined;
            resourceInputs["buildSpec"] = args ? args.buildSpec : undefined;
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["customRules"] = args ? args.customRules : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enableBranchAutoDeletion"] = args ? args.enableBranchAutoDeletion : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["iamServiceRole"] = args ? args.iamServiceRole : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["oauthToken"] = args ? args.oauthToken : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["appId"] = undefined /*out*/;
            resourceInputs["appName"] = undefined /*out*/;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["defaultDomain"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AmplifyApp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AmplifyApp resources.
 */
export interface AmplifyAppState {
    accessToken?: pulumi.Input<string>;
    appId?: pulumi.Input<string>;
    appName?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    autoBranchCreationConfig?: pulumi.Input<inputs.AmplifyAppAutoBranchCreationConfig>;
    basicAuthConfig?: pulumi.Input<inputs.AmplifyAppBasicAuthConfig>;
    buildSpec?: pulumi.Input<string>;
    customHeaders?: pulumi.Input<string>;
    customRules?: pulumi.Input<pulumi.Input<inputs.AmplifyAppCustomRule>[]>;
    defaultDomain?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enableBranchAutoDeletion?: pulumi.Input<boolean>;
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.AmplifyAppEnvironmentVariable>[]>;
    iamServiceRole?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    oauthToken?: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    repository?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.AmplifyAppTag>[]>;
}

/**
 * The set of arguments for constructing a AmplifyApp resource.
 */
export interface AmplifyAppArgs {
    accessToken?: pulumi.Input<string>;
    autoBranchCreationConfig?: pulumi.Input<inputs.AmplifyAppAutoBranchCreationConfig>;
    basicAuthConfig?: pulumi.Input<inputs.AmplifyAppBasicAuthConfig>;
    buildSpec?: pulumi.Input<string>;
    customHeaders?: pulumi.Input<string>;
    customRules?: pulumi.Input<pulumi.Input<inputs.AmplifyAppCustomRule>[]>;
    description?: pulumi.Input<string>;
    enableBranchAutoDeletion?: pulumi.Input<boolean>;
    environmentVariables?: pulumi.Input<pulumi.Input<inputs.AmplifyAppEnvironmentVariable>[]>;
    iamServiceRole?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    oauthToken?: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    repository?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.AmplifyAppTag>[]>;
}
