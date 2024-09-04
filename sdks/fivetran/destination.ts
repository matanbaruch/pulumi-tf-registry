// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Destination extends pulumi.CustomResource {
    /**
     * Get an existing Destination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationState, opts?: pulumi.CustomResourceOptions): Destination {
        return new Destination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fivetran:index/destination:Destination';

    /**
     * Returns true if the given object is an instance of Destination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Destination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Destination.__pulumiType;
    }

    public readonly config!: pulumi.Output<outputs.DestinationConfig | undefined>;
    /**
     * Shift my UTC offset with daylight savings time (US Only)
     */
    public readonly daylightSavingTimeEnabled!: pulumi.Output<boolean>;
    /**
     * The unique identifier for the Group within the Fivetran system.
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * The local processing agent ID that refers to the controller created for the group the connection belongs to. If the
     * value is specified, the system will try to associate the connection with an existing agent.
     */
    public readonly localProcessingAgentId!: pulumi.Output<string | undefined>;
    /**
     * Possible values: Directly, SshTunnel, ProxyAgent.
     */
    public readonly networkingMethod!: pulumi.Output<string>;
    /**
     * Data processing location. This is where Fivetran will operate and run computation on data.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * Specifies whether the setup tests should be run automatically. The default value is TRUE.
     */
    public readonly runSetupTests!: pulumi.Output<boolean>;
    /**
     * The destination type id within the Fivetran system.
     */
    public readonly service!: pulumi.Output<string>;
    /**
     * Destination setup status.
     */
    public /*out*/ readonly setupStatus!: pulumi.Output<string>;
    /**
     * Determines the time zone for the Fivetran sync schedule.
     */
    public readonly timeZoneOffset!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DestinationTimeouts | undefined>;
    /**
     * Specifies whether we should trust the certificate automatically. The default value is FALSE. If a certificate is not
     * trusted automatically, it has to be approved with [Certificates Management API Approve a destination
     * certificate](https://fivetran.com/docs/rest-api/certificates#approveadestinationcertificate).
     */
    public readonly trustCertificates!: pulumi.Output<boolean>;
    /**
     * Specifies whether we should trust the SSH fingerprint automatically. The default value is FALSE. If a fingerprint is not
     * trusted automatically, it has to be approved with [Certificates Management API Approve a destination
     * fingerprint](https://fivetran.com/docs/rest-api/certificates#approveadestinationfingerprint).
     */
    public readonly trustFingerprints!: pulumi.Output<boolean>;

    /**
     * Create a Destination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DestinationArgs | DestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DestinationState | undefined;
            resourceInputs["config"] = state ? state.config : undefined;
            resourceInputs["daylightSavingTimeEnabled"] = state ? state.daylightSavingTimeEnabled : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["localProcessingAgentId"] = state ? state.localProcessingAgentId : undefined;
            resourceInputs["networkingMethod"] = state ? state.networkingMethod : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["runSetupTests"] = state ? state.runSetupTests : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["setupStatus"] = state ? state.setupStatus : undefined;
            resourceInputs["timeZoneOffset"] = state ? state.timeZoneOffset : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["trustCertificates"] = state ? state.trustCertificates : undefined;
            resourceInputs["trustFingerprints"] = state ? state.trustFingerprints : undefined;
        } else {
            const args = argsOrState as DestinationArgs | undefined;
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.service === undefined) && !opts.urn) {
                throw new Error("Missing required property 'service'");
            }
            if ((!args || args.timeZoneOffset === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeZoneOffset'");
            }
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["daylightSavingTimeEnabled"] = args ? args.daylightSavingTimeEnabled : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["localProcessingAgentId"] = args ? args.localProcessingAgentId : undefined;
            resourceInputs["networkingMethod"] = args ? args.networkingMethod : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["runSetupTests"] = args ? args.runSetupTests : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["timeZoneOffset"] = args ? args.timeZoneOffset : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["trustCertificates"] = args ? args.trustCertificates : undefined;
            resourceInputs["trustFingerprints"] = args ? args.trustFingerprints : undefined;
            resourceInputs["setupStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Destination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Destination resources.
 */
export interface DestinationState {
    config?: pulumi.Input<inputs.DestinationConfig>;
    /**
     * Shift my UTC offset with daylight savings time (US Only)
     */
    daylightSavingTimeEnabled?: pulumi.Input<boolean>;
    /**
     * The unique identifier for the Group within the Fivetran system.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The local processing agent ID that refers to the controller created for the group the connection belongs to. If the
     * value is specified, the system will try to associate the connection with an existing agent.
     */
    localProcessingAgentId?: pulumi.Input<string>;
    /**
     * Possible values: Directly, SshTunnel, ProxyAgent.
     */
    networkingMethod?: pulumi.Input<string>;
    /**
     * Data processing location. This is where Fivetran will operate and run computation on data.
     */
    region?: pulumi.Input<string>;
    /**
     * Specifies whether the setup tests should be run automatically. The default value is TRUE.
     */
    runSetupTests?: pulumi.Input<boolean>;
    /**
     * The destination type id within the Fivetran system.
     */
    service?: pulumi.Input<string>;
    /**
     * Destination setup status.
     */
    setupStatus?: pulumi.Input<string>;
    /**
     * Determines the time zone for the Fivetran sync schedule.
     */
    timeZoneOffset?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DestinationTimeouts>;
    /**
     * Specifies whether we should trust the certificate automatically. The default value is FALSE. If a certificate is not
     * trusted automatically, it has to be approved with [Certificates Management API Approve a destination
     * certificate](https://fivetran.com/docs/rest-api/certificates#approveadestinationcertificate).
     */
    trustCertificates?: pulumi.Input<boolean>;
    /**
     * Specifies whether we should trust the SSH fingerprint automatically. The default value is FALSE. If a fingerprint is not
     * trusted automatically, it has to be approved with [Certificates Management API Approve a destination
     * fingerprint](https://fivetran.com/docs/rest-api/certificates#approveadestinationfingerprint).
     */
    trustFingerprints?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Destination resource.
 */
export interface DestinationArgs {
    config?: pulumi.Input<inputs.DestinationConfig>;
    /**
     * Shift my UTC offset with daylight savings time (US Only)
     */
    daylightSavingTimeEnabled?: pulumi.Input<boolean>;
    /**
     * The unique identifier for the Group within the Fivetran system.
     */
    groupId: pulumi.Input<string>;
    /**
     * The local processing agent ID that refers to the controller created for the group the connection belongs to. If the
     * value is specified, the system will try to associate the connection with an existing agent.
     */
    localProcessingAgentId?: pulumi.Input<string>;
    /**
     * Possible values: Directly, SshTunnel, ProxyAgent.
     */
    networkingMethod?: pulumi.Input<string>;
    /**
     * Data processing location. This is where Fivetran will operate and run computation on data.
     */
    region: pulumi.Input<string>;
    /**
     * Specifies whether the setup tests should be run automatically. The default value is TRUE.
     */
    runSetupTests?: pulumi.Input<boolean>;
    /**
     * The destination type id within the Fivetran system.
     */
    service: pulumi.Input<string>;
    /**
     * Determines the time zone for the Fivetran sync schedule.
     */
    timeZoneOffset: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DestinationTimeouts>;
    /**
     * Specifies whether we should trust the certificate automatically. The default value is FALSE. If a certificate is not
     * trusted automatically, it has to be approved with [Certificates Management API Approve a destination
     * certificate](https://fivetran.com/docs/rest-api/certificates#approveadestinationcertificate).
     */
    trustCertificates?: pulumi.Input<boolean>;
    /**
     * Specifies whether we should trust the SSH fingerprint automatically. The default value is FALSE. If a fingerprint is not
     * trusted automatically, it has to be approved with [Certificates Management API Approve a destination
     * fingerprint](https://fivetran.com/docs/rest-api/certificates#approveadestinationfingerprint).
     */
    trustFingerprints?: pulumi.Input<boolean>;
}
