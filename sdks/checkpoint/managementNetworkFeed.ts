// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ManagementNetworkFeed extends pulumi.CustomResource {
    /**
     * Get an existing ManagementNetworkFeed resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementNetworkFeedState, opts?: pulumi.CustomResourceOptions): ManagementNetworkFeed {
        return new ManagementNetworkFeed(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementNetworkFeed:ManagementNetworkFeed';

    /**
     * Returns true if the given object is an instance of ManagementNetworkFeed.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementNetworkFeed {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementNetworkFeed.__pulumiType;
    }

    /**
     * Certificate SHA-1 fingerprint to access the feed.
     */
    public readonly certificateId!: pulumi.Output<string | undefined>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * Headers to allow different authentication methods with the URL.
     */
    public readonly customHeaders!: pulumi.Output<outputs.ManagementNetworkFeedCustomHeader[] | undefined>;
    /**
     * Number of the column that contains the feed's data.
     */
    public readonly dataColumn!: pulumi.Output<number | undefined>;
    /**
     * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the
     * System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
     */
    public readonly domainsToProcesses!: pulumi.Output<string[] | undefined>;
    /**
     * Feed file format.
     */
    public readonly feedFormat!: pulumi.Output<string | undefined>;
    /**
     * Feed type to be enforced.
     */
    public readonly feedType!: pulumi.Output<string | undefined>;
    /**
     * URL of the feed. URL should be written as http or https.
     */
    public readonly feedUrl!: pulumi.Output<string | undefined>;
    /**
     * The delimiter that separates between the columns in the feed. For feed format 'Flat List' default is ' '(new line).
     */
    public readonly fieldsDelimiter!: pulumi.Output<string | undefined>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * A prefix that will determine which lines to ignore.
     */
    public readonly ignoreLinesThatStartWith!: pulumi.Output<string | undefined>;
    /**
     * Apply changes ignoring warnings.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * JQ query to be parsed.
     */
    public readonly jsonQuery!: pulumi.Output<string | undefined>;
    /**
     * Object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * password for authenticating with the URL.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Interval in minutes for updating the feed on the Security Gateway.
     */
    public readonly updateInterval!: pulumi.Output<number | undefined>;
    /**
     * Use the gateway's proxy for retrieving the feed.
     */
    public readonly useGatewayProxy!: pulumi.Output<boolean | undefined>;
    /**
     * username for authenticating with the URL.
     */
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagementNetworkFeed resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementNetworkFeedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementNetworkFeedArgs | ManagementNetworkFeedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementNetworkFeedState | undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["customHeaders"] = state ? state.customHeaders : undefined;
            resourceInputs["dataColumn"] = state ? state.dataColumn : undefined;
            resourceInputs["domainsToProcesses"] = state ? state.domainsToProcesses : undefined;
            resourceInputs["feedFormat"] = state ? state.feedFormat : undefined;
            resourceInputs["feedType"] = state ? state.feedType : undefined;
            resourceInputs["feedUrl"] = state ? state.feedUrl : undefined;
            resourceInputs["fieldsDelimiter"] = state ? state.fieldsDelimiter : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreLinesThatStartWith"] = state ? state.ignoreLinesThatStartWith : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["jsonQuery"] = state ? state.jsonQuery : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updateInterval"] = state ? state.updateInterval : undefined;
            resourceInputs["useGatewayProxy"] = state ? state.useGatewayProxy : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as ManagementNetworkFeedArgs | undefined;
            resourceInputs["certificateId"] = args ? args.certificateId : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["dataColumn"] = args ? args.dataColumn : undefined;
            resourceInputs["domainsToProcesses"] = args ? args.domainsToProcesses : undefined;
            resourceInputs["feedFormat"] = args ? args.feedFormat : undefined;
            resourceInputs["feedType"] = args ? args.feedType : undefined;
            resourceInputs["feedUrl"] = args ? args.feedUrl : undefined;
            resourceInputs["fieldsDelimiter"] = args ? args.fieldsDelimiter : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreLinesThatStartWith"] = args ? args.ignoreLinesThatStartWith : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["jsonQuery"] = args ? args.jsonQuery : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["updateInterval"] = args ? args.updateInterval : undefined;
            resourceInputs["useGatewayProxy"] = args ? args.useGatewayProxy : undefined;
            resourceInputs["username"] = args?.username ? pulumi.secret(args.username) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password", "username"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ManagementNetworkFeed.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementNetworkFeed resources.
 */
export interface ManagementNetworkFeedState {
    /**
     * Certificate SHA-1 fingerprint to access the feed.
     */
    certificateId?: pulumi.Input<string>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Headers to allow different authentication methods with the URL.
     */
    customHeaders?: pulumi.Input<pulumi.Input<inputs.ManagementNetworkFeedCustomHeader>[]>;
    /**
     * Number of the column that contains the feed's data.
     */
    dataColumn?: pulumi.Input<number>;
    /**
     * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the
     * System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
     */
    domainsToProcesses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Feed file format.
     */
    feedFormat?: pulumi.Input<string>;
    /**
     * Feed type to be enforced.
     */
    feedType?: pulumi.Input<string>;
    /**
     * URL of the feed. URL should be written as http or https.
     */
    feedUrl?: pulumi.Input<string>;
    /**
     * The delimiter that separates between the columns in the feed. For feed format 'Flat List' default is ' '(new line).
     */
    fieldsDelimiter?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * A prefix that will determine which lines to ignore.
     */
    ignoreLinesThatStartWith?: pulumi.Input<string>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * JQ query to be parsed.
     */
    jsonQuery?: pulumi.Input<string>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * password for authenticating with the URL.
     */
    password?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interval in minutes for updating the feed on the Security Gateway.
     */
    updateInterval?: pulumi.Input<number>;
    /**
     * Use the gateway's proxy for retrieving the feed.
     */
    useGatewayProxy?: pulumi.Input<boolean>;
    /**
     * username for authenticating with the URL.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementNetworkFeed resource.
 */
export interface ManagementNetworkFeedArgs {
    /**
     * Certificate SHA-1 fingerprint to access the feed.
     */
    certificateId?: pulumi.Input<string>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Headers to allow different authentication methods with the URL.
     */
    customHeaders?: pulumi.Input<pulumi.Input<inputs.ManagementNetworkFeedCustomHeader>[]>;
    /**
     * Number of the column that contains the feed's data.
     */
    dataColumn?: pulumi.Input<number>;
    /**
     * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the
     * System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
     */
    domainsToProcesses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Feed file format.
     */
    feedFormat?: pulumi.Input<string>;
    /**
     * Feed type to be enforced.
     */
    feedType?: pulumi.Input<string>;
    /**
     * URL of the feed. URL should be written as http or https.
     */
    feedUrl?: pulumi.Input<string>;
    /**
     * The delimiter that separates between the columns in the feed. For feed format 'Flat List' default is ' '(new line).
     */
    fieldsDelimiter?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * A prefix that will determine which lines to ignore.
     */
    ignoreLinesThatStartWith?: pulumi.Input<string>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * JQ query to be parsed.
     */
    jsonQuery?: pulumi.Input<string>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * password for authenticating with the URL.
     */
    password?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interval in minutes for updating the feed on the Security Gateway.
     */
    updateInterval?: pulumi.Input<number>;
    /**
     * Use the gateway's proxy for retrieving the feed.
     */
    useGatewayProxy?: pulumi.Input<boolean>;
    /**
     * username for authenticating with the URL.
     */
    username?: pulumi.Input<string>;
}
