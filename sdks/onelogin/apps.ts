// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Apps extends pulumi.CustomResource {
    /**
     * Get an existing Apps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppsState, opts?: pulumi.CustomResourceOptions): Apps {
        return new Apps(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'onelogin:index/apps:Apps';

    /**
     * Returns true if the given object is an instance of Apps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Apps {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Apps.__pulumiType;
    }

    /**
     * Indicates whether or not administrators can access the app as a user that they have assumed control over.
     */
    public readonly allowAssumedSignin!: pulumi.Output<boolean | undefined>;
    /**
     * An ID indicating the type of app: - 0: Password - 1: OpenId - 2: SAML - 3: API - 4: Google - 6: Forms Based App - 7:
     * WSFED - 8: OpenId Connect
     */
    public readonly authMethod!: pulumi.Output<number | undefined>;
    public readonly authMethodDescription!: pulumi.Output<string>;
    public readonly brandId!: pulumi.Output<number | undefined>;
    /**
     * Only apply configurations that are applicable to the type of app
     */
    public readonly configuration!: pulumi.Output<outputs.AppsConfiguration | undefined>;
    /**
     * ID of the connector to base the app from.
     */
    public readonly connectorId!: pulumi.Output<number>;
    /**
     * the date the app was created
     */
    public readonly createdAt!: pulumi.Output<string>;
    /**
     * Freeform description of the app.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * For apps that connect to a OneLogin Access Enforcement Point the following enforcement_point object will be included
     * with the app payload.
     */
    public readonly enforcementPoint!: pulumi.Output<outputs.AppsEnforcementPoint | undefined>;
    /**
     * A link to the apps icon url
     */
    public readonly iconUrl!: pulumi.Output<string | undefined>;
    public readonly loginConfig!: pulumi.Output<number>;
    /**
     * The name of the app.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Freeform notes about the app.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    public readonly parameters!: pulumi.Output<outputs.AppsParameters | undefined>;
    /**
     * The security policy assigned to the app.
     */
    public readonly policyId!: pulumi.Output<number | undefined>;
    /**
     * Indicates if provisioning is enabled for this app.
     */
    public readonly provisioning!: pulumi.Output<outputs.AppsProvisioning | undefined>;
    /**
     * List of Role IDs that are assigned to the app. On App Create or Update the entire array is replaced with the values
     * provided.
     */
    public readonly roleIds!: pulumi.Output<number[] | undefined>;
    /**
     * The attributes included in the sso section are determined by the type of app. All of the attributes of the `sso` object
     * are read only.
     */
    public readonly sso!: pulumi.Output<outputs.AppsSso | undefined>;
    /**
     * ID of the OneLogin portal tab that the app is assigned to.
     */
    public readonly tabId!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.AppsTimeouts | undefined>;
    /**
     * the date the app was last updated
     */
    public readonly updatedAt!: pulumi.Output<string>;
    /**
     * Indicates if the app is visible in the OneLogin portal.
     */
    public readonly visible!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Apps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppsArgs | AppsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppsState | undefined;
            resourceInputs["allowAssumedSignin"] = state ? state.allowAssumedSignin : undefined;
            resourceInputs["authMethod"] = state ? state.authMethod : undefined;
            resourceInputs["authMethodDescription"] = state ? state.authMethodDescription : undefined;
            resourceInputs["brandId"] = state ? state.brandId : undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["connectorId"] = state ? state.connectorId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enforcementPoint"] = state ? state.enforcementPoint : undefined;
            resourceInputs["iconUrl"] = state ? state.iconUrl : undefined;
            resourceInputs["loginConfig"] = state ? state.loginConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
            resourceInputs["provisioning"] = state ? state.provisioning : undefined;
            resourceInputs["roleIds"] = state ? state.roleIds : undefined;
            resourceInputs["sso"] = state ? state.sso : undefined;
            resourceInputs["tabId"] = state ? state.tabId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["visible"] = state ? state.visible : undefined;
        } else {
            const args = argsOrState as AppsArgs | undefined;
            if ((!args || args.connectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorId'");
            }
            resourceInputs["allowAssumedSignin"] = args ? args.allowAssumedSignin : undefined;
            resourceInputs["authMethod"] = args ? args.authMethod : undefined;
            resourceInputs["authMethodDescription"] = args ? args.authMethodDescription : undefined;
            resourceInputs["brandId"] = args ? args.brandId : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["connectorId"] = args ? args.connectorId : undefined;
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enforcementPoint"] = args ? args.enforcementPoint : undefined;
            resourceInputs["iconUrl"] = args ? args.iconUrl : undefined;
            resourceInputs["loginConfig"] = args ? args.loginConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["provisioning"] = args ? args.provisioning : undefined;
            resourceInputs["roleIds"] = args ? args.roleIds : undefined;
            resourceInputs["sso"] = args ? args.sso : undefined;
            resourceInputs["tabId"] = args ? args.tabId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["updatedAt"] = args ? args.updatedAt : undefined;
            resourceInputs["visible"] = args ? args.visible : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Apps.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Apps resources.
 */
export interface AppsState {
    /**
     * Indicates whether or not administrators can access the app as a user that they have assumed control over.
     */
    allowAssumedSignin?: pulumi.Input<boolean>;
    /**
     * An ID indicating the type of app: - 0: Password - 1: OpenId - 2: SAML - 3: API - 4: Google - 6: Forms Based App - 7:
     * WSFED - 8: OpenId Connect
     */
    authMethod?: pulumi.Input<number>;
    authMethodDescription?: pulumi.Input<string>;
    brandId?: pulumi.Input<number>;
    /**
     * Only apply configurations that are applicable to the type of app
     */
    configuration?: pulumi.Input<inputs.AppsConfiguration>;
    /**
     * ID of the connector to base the app from.
     */
    connectorId?: pulumi.Input<number>;
    /**
     * the date the app was created
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Freeform description of the app.
     */
    description?: pulumi.Input<string>;
    /**
     * For apps that connect to a OneLogin Access Enforcement Point the following enforcement_point object will be included
     * with the app payload.
     */
    enforcementPoint?: pulumi.Input<inputs.AppsEnforcementPoint>;
    /**
     * A link to the apps icon url
     */
    iconUrl?: pulumi.Input<string>;
    loginConfig?: pulumi.Input<number>;
    /**
     * The name of the app.
     */
    name?: pulumi.Input<string>;
    /**
     * Freeform notes about the app.
     */
    notes?: pulumi.Input<string>;
    parameters?: pulumi.Input<inputs.AppsParameters>;
    /**
     * The security policy assigned to the app.
     */
    policyId?: pulumi.Input<number>;
    /**
     * Indicates if provisioning is enabled for this app.
     */
    provisioning?: pulumi.Input<inputs.AppsProvisioning>;
    /**
     * List of Role IDs that are assigned to the app. On App Create or Update the entire array is replaced with the values
     * provided.
     */
    roleIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The attributes included in the sso section are determined by the type of app. All of the attributes of the `sso` object
     * are read only.
     */
    sso?: pulumi.Input<inputs.AppsSso>;
    /**
     * ID of the OneLogin portal tab that the app is assigned to.
     */
    tabId?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.AppsTimeouts>;
    /**
     * the date the app was last updated
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * Indicates if the app is visible in the OneLogin portal.
     */
    visible?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Apps resource.
 */
export interface AppsArgs {
    /**
     * Indicates whether or not administrators can access the app as a user that they have assumed control over.
     */
    allowAssumedSignin?: pulumi.Input<boolean>;
    /**
     * An ID indicating the type of app: - 0: Password - 1: OpenId - 2: SAML - 3: API - 4: Google - 6: Forms Based App - 7:
     * WSFED - 8: OpenId Connect
     */
    authMethod?: pulumi.Input<number>;
    authMethodDescription?: pulumi.Input<string>;
    brandId?: pulumi.Input<number>;
    /**
     * Only apply configurations that are applicable to the type of app
     */
    configuration?: pulumi.Input<inputs.AppsConfiguration>;
    /**
     * ID of the connector to base the app from.
     */
    connectorId: pulumi.Input<number>;
    /**
     * the date the app was created
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Freeform description of the app.
     */
    description?: pulumi.Input<string>;
    /**
     * For apps that connect to a OneLogin Access Enforcement Point the following enforcement_point object will be included
     * with the app payload.
     */
    enforcementPoint?: pulumi.Input<inputs.AppsEnforcementPoint>;
    /**
     * A link to the apps icon url
     */
    iconUrl?: pulumi.Input<string>;
    loginConfig?: pulumi.Input<number>;
    /**
     * The name of the app.
     */
    name?: pulumi.Input<string>;
    /**
     * Freeform notes about the app.
     */
    notes?: pulumi.Input<string>;
    parameters?: pulumi.Input<inputs.AppsParameters>;
    /**
     * The security policy assigned to the app.
     */
    policyId?: pulumi.Input<number>;
    /**
     * Indicates if provisioning is enabled for this app.
     */
    provisioning?: pulumi.Input<inputs.AppsProvisioning>;
    /**
     * List of Role IDs that are assigned to the app. On App Create or Update the entire array is replaced with the values
     * provided.
     */
    roleIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The attributes included in the sso section are determined by the type of app. All of the attributes of the `sso` object
     * are read only.
     */
    sso?: pulumi.Input<inputs.AppsSso>;
    /**
     * ID of the OneLogin portal tab that the app is assigned to.
     */
    tabId?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.AppsTimeouts>;
    /**
     * the date the app was last updated
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * Indicates if the app is visible in the OneLogin portal.
     */
    visible?: pulumi.Input<boolean>;
}
