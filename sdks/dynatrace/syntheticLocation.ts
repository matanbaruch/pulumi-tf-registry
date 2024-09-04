// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SyntheticLocation extends pulumi.CustomResource {
    /**
     * Get an existing SyntheticLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyntheticLocationState, opts?: pulumi.CustomResourceOptions): SyntheticLocation {
        return new SyntheticLocation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/syntheticLocation:SyntheticLocation';

    /**
     * Returns true if the given object is an instance of SyntheticLocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyntheticLocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyntheticLocation.__pulumiType;
    }

    /**
     * Auto upgrade of Chromium is enabled (`true`) or disabled (`false`)
     */
    public readonly autoUpdateChromium!: pulumi.Output<boolean | undefined>;
    /**
     * The alerting of location outage is enabled (`true`) or disabled (`false`)
     */
    public readonly availabilityLocationOutage!: pulumi.Output<boolean | undefined>;
    /**
     * The alerting of node outage is enabled (`true`) or disabled (`false`). If enabled, the outage of *any* node in the
     * location triggers an alert
     */
    public readonly availabilityNodeOutage!: pulumi.Output<boolean | undefined>;
    /**
     * The notifications of location and node outage is enabled (`true`) or disabled (`false`)
     */
    public readonly availabilityNotificationsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The city of the location
     */
    public readonly city!: pulumi.Output<string | undefined>;
    /**
     * The country code of the location. Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for
     * example, `AT` for Austria or `PL` for Poland)
     */
    public readonly countryCode!: pulumi.Output<string | undefined>;
    /**
     * The deployment type of the location: * `STANDARD`: The location is deployed on Windows or Linux. * `KUBERNETES`: The
     * location is deployed on Kubernetes
     */
    public readonly deploymentType!: pulumi.Output<string | undefined>;
    /**
     * The latitude of the location in `DDD.dddd` format
     */
    public readonly latitude!: pulumi.Output<number>;
    /**
     * Alert if the location or node outage lasts longer than *X* minutes. Only applicable when
     * **availability_location_outage** or **availability_node_outage** is set to `true`
     */
    public readonly locationNodeOutageDelayInMinutes!: pulumi.Output<number | undefined>;
    /**
     * The longitude of the location in `DDD.dddd` format
     */
    public readonly longitude!: pulumi.Output<number>;
    /**
     * The maximum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
     */
    public readonly maxActiveGateCount!: pulumi.Output<number | undefined>;
    /**
     * The minimum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
     */
    public readonly minActiveGateCount!: pulumi.Output<number | undefined>;
    /**
     * The name of the location
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Possible values: `UNSUPPORTED`, `XS`, `S` and `M`. Not required when `deployment_type` is set to `STANDARD`.
     */
    public readonly nodeSize!: pulumi.Output<string | undefined>;
    /**
     * A list of synthetic nodes belonging to the location. You can retrieve the list of available nodes with the [GET all
     * nodes](https://dt-url.net/miy3rpl) call
     */
    public readonly nodes!: pulumi.Output<string[] | undefined>;
    /**
     * The region code of the location. For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca)
     * use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon. For the
     * rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes)
     */
    public readonly regionCode!: pulumi.Output<string | undefined>;

    /**
     * Create a SyntheticLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyntheticLocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SyntheticLocationArgs | SyntheticLocationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SyntheticLocationState | undefined;
            resourceInputs["autoUpdateChromium"] = state ? state.autoUpdateChromium : undefined;
            resourceInputs["availabilityLocationOutage"] = state ? state.availabilityLocationOutage : undefined;
            resourceInputs["availabilityNodeOutage"] = state ? state.availabilityNodeOutage : undefined;
            resourceInputs["availabilityNotificationsEnabled"] = state ? state.availabilityNotificationsEnabled : undefined;
            resourceInputs["city"] = state ? state.city : undefined;
            resourceInputs["countryCode"] = state ? state.countryCode : undefined;
            resourceInputs["deploymentType"] = state ? state.deploymentType : undefined;
            resourceInputs["latitude"] = state ? state.latitude : undefined;
            resourceInputs["locationNodeOutageDelayInMinutes"] = state ? state.locationNodeOutageDelayInMinutes : undefined;
            resourceInputs["longitude"] = state ? state.longitude : undefined;
            resourceInputs["maxActiveGateCount"] = state ? state.maxActiveGateCount : undefined;
            resourceInputs["minActiveGateCount"] = state ? state.minActiveGateCount : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeSize"] = state ? state.nodeSize : undefined;
            resourceInputs["nodes"] = state ? state.nodes : undefined;
            resourceInputs["regionCode"] = state ? state.regionCode : undefined;
        } else {
            const args = argsOrState as SyntheticLocationArgs | undefined;
            if ((!args || args.latitude === undefined) && !opts.urn) {
                throw new Error("Missing required property 'latitude'");
            }
            if ((!args || args.longitude === undefined) && !opts.urn) {
                throw new Error("Missing required property 'longitude'");
            }
            resourceInputs["autoUpdateChromium"] = args ? args.autoUpdateChromium : undefined;
            resourceInputs["availabilityLocationOutage"] = args ? args.availabilityLocationOutage : undefined;
            resourceInputs["availabilityNodeOutage"] = args ? args.availabilityNodeOutage : undefined;
            resourceInputs["availabilityNotificationsEnabled"] = args ? args.availabilityNotificationsEnabled : undefined;
            resourceInputs["city"] = args ? args.city : undefined;
            resourceInputs["countryCode"] = args ? args.countryCode : undefined;
            resourceInputs["deploymentType"] = args ? args.deploymentType : undefined;
            resourceInputs["latitude"] = args ? args.latitude : undefined;
            resourceInputs["locationNodeOutageDelayInMinutes"] = args ? args.locationNodeOutageDelayInMinutes : undefined;
            resourceInputs["longitude"] = args ? args.longitude : undefined;
            resourceInputs["maxActiveGateCount"] = args ? args.maxActiveGateCount : undefined;
            resourceInputs["minActiveGateCount"] = args ? args.minActiveGateCount : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeSize"] = args ? args.nodeSize : undefined;
            resourceInputs["nodes"] = args ? args.nodes : undefined;
            resourceInputs["regionCode"] = args ? args.regionCode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SyntheticLocation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SyntheticLocation resources.
 */
export interface SyntheticLocationState {
    /**
     * Auto upgrade of Chromium is enabled (`true`) or disabled (`false`)
     */
    autoUpdateChromium?: pulumi.Input<boolean>;
    /**
     * The alerting of location outage is enabled (`true`) or disabled (`false`)
     */
    availabilityLocationOutage?: pulumi.Input<boolean>;
    /**
     * The alerting of node outage is enabled (`true`) or disabled (`false`). If enabled, the outage of *any* node in the
     * location triggers an alert
     */
    availabilityNodeOutage?: pulumi.Input<boolean>;
    /**
     * The notifications of location and node outage is enabled (`true`) or disabled (`false`)
     */
    availabilityNotificationsEnabled?: pulumi.Input<boolean>;
    /**
     * The city of the location
     */
    city?: pulumi.Input<string>;
    /**
     * The country code of the location. Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for
     * example, `AT` for Austria or `PL` for Poland)
     */
    countryCode?: pulumi.Input<string>;
    /**
     * The deployment type of the location: * `STANDARD`: The location is deployed on Windows or Linux. * `KUBERNETES`: The
     * location is deployed on Kubernetes
     */
    deploymentType?: pulumi.Input<string>;
    /**
     * The latitude of the location in `DDD.dddd` format
     */
    latitude?: pulumi.Input<number>;
    /**
     * Alert if the location or node outage lasts longer than *X* minutes. Only applicable when
     * **availability_location_outage** or **availability_node_outage** is set to `true`
     */
    locationNodeOutageDelayInMinutes?: pulumi.Input<number>;
    /**
     * The longitude of the location in `DDD.dddd` format
     */
    longitude?: pulumi.Input<number>;
    /**
     * The maximum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
     */
    maxActiveGateCount?: pulumi.Input<number>;
    /**
     * The minimum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
     */
    minActiveGateCount?: pulumi.Input<number>;
    /**
     * The name of the location
     */
    name?: pulumi.Input<string>;
    /**
     * Possible values: `UNSUPPORTED`, `XS`, `S` and `M`. Not required when `deployment_type` is set to `STANDARD`.
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * A list of synthetic nodes belonging to the location. You can retrieve the list of available nodes with the [GET all
     * nodes](https://dt-url.net/miy3rpl) call
     */
    nodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The region code of the location. For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca)
     * use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon. For the
     * rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes)
     */
    regionCode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SyntheticLocation resource.
 */
export interface SyntheticLocationArgs {
    /**
     * Auto upgrade of Chromium is enabled (`true`) or disabled (`false`)
     */
    autoUpdateChromium?: pulumi.Input<boolean>;
    /**
     * The alerting of location outage is enabled (`true`) or disabled (`false`)
     */
    availabilityLocationOutage?: pulumi.Input<boolean>;
    /**
     * The alerting of node outage is enabled (`true`) or disabled (`false`). If enabled, the outage of *any* node in the
     * location triggers an alert
     */
    availabilityNodeOutage?: pulumi.Input<boolean>;
    /**
     * The notifications of location and node outage is enabled (`true`) or disabled (`false`)
     */
    availabilityNotificationsEnabled?: pulumi.Input<boolean>;
    /**
     * The city of the location
     */
    city?: pulumi.Input<string>;
    /**
     * The country code of the location. Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for
     * example, `AT` for Austria or `PL` for Poland)
     */
    countryCode?: pulumi.Input<string>;
    /**
     * The deployment type of the location: * `STANDARD`: The location is deployed on Windows or Linux. * `KUBERNETES`: The
     * location is deployed on Kubernetes
     */
    deploymentType?: pulumi.Input<string>;
    /**
     * The latitude of the location in `DDD.dddd` format
     */
    latitude: pulumi.Input<number>;
    /**
     * Alert if the location or node outage lasts longer than *X* minutes. Only applicable when
     * **availability_location_outage** or **availability_node_outage** is set to `true`
     */
    locationNodeOutageDelayInMinutes?: pulumi.Input<number>;
    /**
     * The longitude of the location in `DDD.dddd` format
     */
    longitude: pulumi.Input<number>;
    /**
     * The maximum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
     */
    maxActiveGateCount?: pulumi.Input<number>;
    /**
     * The minimum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
     */
    minActiveGateCount?: pulumi.Input<number>;
    /**
     * The name of the location
     */
    name?: pulumi.Input<string>;
    /**
     * Possible values: `UNSUPPORTED`, `XS`, `S` and `M`. Not required when `deployment_type` is set to `STANDARD`.
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * A list of synthetic nodes belonging to the location. You can retrieve the list of available nodes with the [GET all
     * nodes](https://dt-url.net/miy3rpl) call
     */
    nodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The region code of the location. For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca)
     * use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon. For the
     * rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes)
     */
    regionCode?: pulumi.Input<string>;
}
