// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SyntheticMonitoringProbe extends pulumi.CustomResource {
    /**
     * Get an existing SyntheticMonitoringProbe resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyntheticMonitoringProbeState, opts?: pulumi.CustomResourceOptions): SyntheticMonitoringProbe {
        return new SyntheticMonitoringProbe(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'grafana:index/syntheticMonitoringProbe:SyntheticMonitoringProbe';

    /**
     * Returns true if the given object is an instance of SyntheticMonitoringProbe.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyntheticMonitoringProbe {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyntheticMonitoringProbe.__pulumiType;
    }

    /**
     * The probe authentication token. Your probe must use this to authenticate with Grafana Cloud.
     */
    public /*out*/ readonly authToken!: pulumi.Output<string>;
    /**
     * Disables scripted checks for this probe. Defaults to `false`.
     */
    public readonly disableScriptedChecks!: pulumi.Output<boolean | undefined>;
    /**
     * Custom labels to be included with collected metrics and logs.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Latitude coordinates.
     */
    public readonly latitude!: pulumi.Output<number>;
    /**
     * Longitude coordinates.
     */
    public readonly longitude!: pulumi.Output<number>;
    /**
     * Name of the probe.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Public probes are run by Grafana Labs and can be used by all users. Only Grafana Labs managed public probes will be set
     * to `true`. Defaults to `false`.
     */
    public readonly public!: pulumi.Output<boolean | undefined>;
    /**
     * Region of the probe.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The tenant ID of the probe.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<number>;

    /**
     * Create a SyntheticMonitoringProbe resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyntheticMonitoringProbeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SyntheticMonitoringProbeArgs | SyntheticMonitoringProbeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SyntheticMonitoringProbeState | undefined;
            resourceInputs["authToken"] = state ? state.authToken : undefined;
            resourceInputs["disableScriptedChecks"] = state ? state.disableScriptedChecks : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["latitude"] = state ? state.latitude : undefined;
            resourceInputs["longitude"] = state ? state.longitude : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["public"] = state ? state.public : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as SyntheticMonitoringProbeArgs | undefined;
            if ((!args || args.latitude === undefined) && !opts.urn) {
                throw new Error("Missing required property 'latitude'");
            }
            if ((!args || args.longitude === undefined) && !opts.urn) {
                throw new Error("Missing required property 'longitude'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["disableScriptedChecks"] = args ? args.disableScriptedChecks : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["latitude"] = args ? args.latitude : undefined;
            resourceInputs["longitude"] = args ? args.longitude : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["public"] = args ? args.public : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["authToken"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SyntheticMonitoringProbe.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SyntheticMonitoringProbe resources.
 */
export interface SyntheticMonitoringProbeState {
    /**
     * The probe authentication token. Your probe must use this to authenticate with Grafana Cloud.
     */
    authToken?: pulumi.Input<string>;
    /**
     * Disables scripted checks for this probe. Defaults to `false`.
     */
    disableScriptedChecks?: pulumi.Input<boolean>;
    /**
     * Custom labels to be included with collected metrics and logs.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Latitude coordinates.
     */
    latitude?: pulumi.Input<number>;
    /**
     * Longitude coordinates.
     */
    longitude?: pulumi.Input<number>;
    /**
     * Name of the probe.
     */
    name?: pulumi.Input<string>;
    /**
     * Public probes are run by Grafana Labs and can be used by all users. Only Grafana Labs managed public probes will be set
     * to `true`. Defaults to `false`.
     */
    public?: pulumi.Input<boolean>;
    /**
     * Region of the probe.
     */
    region?: pulumi.Input<string>;
    /**
     * The tenant ID of the probe.
     */
    tenantId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SyntheticMonitoringProbe resource.
 */
export interface SyntheticMonitoringProbeArgs {
    /**
     * Disables scripted checks for this probe. Defaults to `false`.
     */
    disableScriptedChecks?: pulumi.Input<boolean>;
    /**
     * Custom labels to be included with collected metrics and logs.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Latitude coordinates.
     */
    latitude: pulumi.Input<number>;
    /**
     * Longitude coordinates.
     */
    longitude: pulumi.Input<number>;
    /**
     * Name of the probe.
     */
    name?: pulumi.Input<string>;
    /**
     * Public probes are run by Grafana Labs and can be used by all users. Only Grafana Labs managed public probes will be set
     * to `true`. Defaults to `false`.
     */
    public?: pulumi.Input<boolean>;
    /**
     * Region of the probe.
     */
    region: pulumi.Input<string>;
}
