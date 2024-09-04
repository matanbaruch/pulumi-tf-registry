// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementOracleCloudDataCenterServer extends pulumi.CustomResource {
    /**
     * Get an existing ManagementOracleCloudDataCenterServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementOracleCloudDataCenterServerState, opts?: pulumi.CustomResourceOptions): ManagementOracleCloudDataCenterServer {
        return new ManagementOracleCloudDataCenterServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementOracleCloudDataCenterServer:ManagementOracleCloudDataCenterServer';

    /**
     * Returns true if the given object is an instance of ManagementOracleCloudDataCenterServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementOracleCloudDataCenterServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementOracleCloudDataCenterServer.__pulumiType;
    }

    /**
     * key-authentication Uses the Service Account private key file to authenticate. vm-instance-authentication Uses VM
     * Instance to authenticate. This option requires the Security Management Server deployed in Oracle Cloud, and running in a
     * dynamic group with the required permissions
     */
    public readonly authenticationMethod!: pulumi.Output<string>;
    /**
     * Indicates whether the data center server's content is automatically updated.
     */
    public /*out*/ readonly automaticRefresh!: pulumi.Output<boolean>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * Data Center type.
     */
    public /*out*/ readonly dataCenterType!: pulumi.Output<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring warnings. By Setting this parameter to 'true' test connection failure will be ignored.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * An Oracle Cloud region for where to create scanner. Required for authentication-method: key-authentication.
     */
    public readonly keyRegion!: pulumi.Output<string>;
    /**
     * An Oracle Cloud tenancy id where the key was created. Required for authentication-method: key-authentication.
     */
    public readonly keyTenant!: pulumi.Output<string>;
    /**
     * An Oracle Cloud user id associated with key. Required for authentication-method: key-authentication.
     */
    public readonly keyUser!: pulumi.Output<string>;
    /**
     * Object name. Must be unique in the domain.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * An Oracle Cloud API key PEM file, encoded in base64. Required for authentication-method: key-authentication.
     */
    public readonly privateKey!: pulumi.Output<string>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ManagementOracleCloudDataCenterServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementOracleCloudDataCenterServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementOracleCloudDataCenterServerArgs | ManagementOracleCloudDataCenterServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementOracleCloudDataCenterServerState | undefined;
            resourceInputs["authenticationMethod"] = state ? state.authenticationMethod : undefined;
            resourceInputs["automaticRefresh"] = state ? state.automaticRefresh : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["dataCenterType"] = state ? state.dataCenterType : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["keyRegion"] = state ? state.keyRegion : undefined;
            resourceInputs["keyTenant"] = state ? state.keyTenant : undefined;
            resourceInputs["keyUser"] = state ? state.keyUser : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ManagementOracleCloudDataCenterServerArgs | undefined;
            if ((!args || args.authenticationMethod === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authenticationMethod'");
            }
            if ((!args || args.keyRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyRegion'");
            }
            if ((!args || args.keyTenant === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyTenant'");
            }
            if ((!args || args.keyUser === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyUser'");
            }
            if ((!args || args.privateKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateKey'");
            }
            resourceInputs["authenticationMethod"] = args ? args.authenticationMethod : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["keyRegion"] = args ? args.keyRegion : undefined;
            resourceInputs["keyTenant"] = args ? args.keyTenant : undefined;
            resourceInputs["keyUser"] = args ? args.keyUser : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateKey"] = args?.privateKey ? pulumi.secret(args.privateKey) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["automaticRefresh"] = undefined /*out*/;
            resourceInputs["dataCenterType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["privateKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ManagementOracleCloudDataCenterServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementOracleCloudDataCenterServer resources.
 */
export interface ManagementOracleCloudDataCenterServerState {
    /**
     * key-authentication Uses the Service Account private key file to authenticate. vm-instance-authentication Uses VM
     * Instance to authenticate. This option requires the Security Management Server deployed in Oracle Cloud, and running in a
     * dynamic group with the required permissions
     */
    authenticationMethod?: pulumi.Input<string>;
    /**
     * Indicates whether the data center server's content is automatically updated.
     */
    automaticRefresh?: pulumi.Input<boolean>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Data Center type.
     */
    dataCenterType?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings. By Setting this parameter to 'true' test connection failure will be ignored.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * An Oracle Cloud region for where to create scanner. Required for authentication-method: key-authentication.
     */
    keyRegion?: pulumi.Input<string>;
    /**
     * An Oracle Cloud tenancy id where the key was created. Required for authentication-method: key-authentication.
     */
    keyTenant?: pulumi.Input<string>;
    /**
     * An Oracle Cloud user id associated with key. Required for authentication-method: key-authentication.
     */
    keyUser?: pulumi.Input<string>;
    /**
     * Object name. Must be unique in the domain.
     */
    name?: pulumi.Input<string>;
    /**
     * An Oracle Cloud API key PEM file, encoded in base64. Required for authentication-method: key-authentication.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ManagementOracleCloudDataCenterServer resource.
 */
export interface ManagementOracleCloudDataCenterServerArgs {
    /**
     * key-authentication Uses the Service Account private key file to authenticate. vm-instance-authentication Uses VM
     * Instance to authenticate. This option requires the Security Management Server deployed in Oracle Cloud, and running in a
     * dynamic group with the required permissions
     */
    authenticationMethod: pulumi.Input<string>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings. By Setting this parameter to 'true' test connection failure will be ignored.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * An Oracle Cloud region for where to create scanner. Required for authentication-method: key-authentication.
     */
    keyRegion: pulumi.Input<string>;
    /**
     * An Oracle Cloud tenancy id where the key was created. Required for authentication-method: key-authentication.
     */
    keyTenant: pulumi.Input<string>;
    /**
     * An Oracle Cloud user id associated with key. Required for authentication-method: key-authentication.
     */
    keyUser: pulumi.Input<string>;
    /**
     * Object name. Must be unique in the domain.
     */
    name?: pulumi.Input<string>;
    /**
     * An Oracle Cloud API key PEM file, encoded in base64. Required for authentication-method: key-authentication.
     */
    privateKey: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
