// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class UrlBasedSampling extends pulumi.CustomResource {
    /**
     * Get an existing UrlBasedSampling resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UrlBasedSamplingState, opts?: pulumi.CustomResourceOptions): UrlBasedSampling {
        return new UrlBasedSampling(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/urlBasedSampling:UrlBasedSampling';

    /**
     * Returns true if the given object is an instance of UrlBasedSampling.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UrlBasedSampling {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UrlBasedSampling.__pulumiType;
    }

    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Select the scaling factor for the current sampling rate of the system. Possible values: `IncreaseCapturing128Times`,
     * `IncreaseCapturing64Times`, `IncreaseCapturing32Times`, `IncreaseCapturing16Times`, `IncreaseCapturing8Times`,
     * `IncreaseCapturing4Times`, `IncreaseCapturing2Times`, `ReduceCapturingByFactor2`, `ReduceCapturingByFactor4`,
     * `ReduceCapturingByFactor8`, `ReduceCapturingByFactor16`, `ReduceCapturingByFactor32`, `ReduceCapturingByFactor64`,
     * `ReduceCapturingByFactor128`
     */
    public readonly factor!: pulumi.Output<string | undefined>;
    /**
     * The scaling factor for the defined URL will be applied to any HTTP method.
     */
    public readonly httpMethodAny!: pulumi.Output<boolean>;
    /**
     * Possible values: `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`
     */
    public readonly httpMethods!: pulumi.Output<string[] | undefined>;
    /**
     * The matching URLs will always be ignored, also if Adaptive Traffic Management is not active.
     */
    public readonly ignore!: pulumi.Output<boolean>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    public readonly insertAfter!: pulumi.Output<string>;
    /**
     * Path of the URL.
     */
    public readonly path!: pulumi.Output<string | undefined>;
    /**
     * Path comparison condition. Possible values: `EQUALS`, `DOES_NOT_EQUAL`, `CONTAINS`, `DOES_NOT_CONTAIN`, `STARTS_WITH`,
     * `DOES_NOT_START_WITH`, `ENDS_WITH`, `DOES_NOT_END_WITH`
     */
    public readonly pathComparisonType!: pulumi.Output<string | undefined>;
    /**
     * Add URL parameters in any order. **All** specified parameters must be present in the query of an URL to get a match.
     */
    public readonly queryParameters!: pulumi.Output<outputs.UrlBasedSamplingQueryParameters | undefined>;
    /**
     * The scope of this setting (PROCESS_GROUP_INSTANCE, PROCESS_GROUP). Omit this property if you want to cover the whole
     * environment.
     */
    public readonly scope!: pulumi.Output<string | undefined>;

    /**
     * Create a UrlBasedSampling resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UrlBasedSamplingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UrlBasedSamplingArgs | UrlBasedSamplingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UrlBasedSamplingState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["factor"] = state ? state.factor : undefined;
            resourceInputs["httpMethodAny"] = state ? state.httpMethodAny : undefined;
            resourceInputs["httpMethods"] = state ? state.httpMethods : undefined;
            resourceInputs["ignore"] = state ? state.ignore : undefined;
            resourceInputs["insertAfter"] = state ? state.insertAfter : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["pathComparisonType"] = state ? state.pathComparisonType : undefined;
            resourceInputs["queryParameters"] = state ? state.queryParameters : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as UrlBasedSamplingArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.httpMethodAny === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpMethodAny'");
            }
            if ((!args || args.ignore === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ignore'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["factor"] = args ? args.factor : undefined;
            resourceInputs["httpMethodAny"] = args ? args.httpMethodAny : undefined;
            resourceInputs["httpMethods"] = args ? args.httpMethods : undefined;
            resourceInputs["ignore"] = args ? args.ignore : undefined;
            resourceInputs["insertAfter"] = args ? args.insertAfter : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["pathComparisonType"] = args ? args.pathComparisonType : undefined;
            resourceInputs["queryParameters"] = args ? args.queryParameters : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UrlBasedSampling.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UrlBasedSampling resources.
 */
export interface UrlBasedSamplingState {
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Select the scaling factor for the current sampling rate of the system. Possible values: `IncreaseCapturing128Times`,
     * `IncreaseCapturing64Times`, `IncreaseCapturing32Times`, `IncreaseCapturing16Times`, `IncreaseCapturing8Times`,
     * `IncreaseCapturing4Times`, `IncreaseCapturing2Times`, `ReduceCapturingByFactor2`, `ReduceCapturingByFactor4`,
     * `ReduceCapturingByFactor8`, `ReduceCapturingByFactor16`, `ReduceCapturingByFactor32`, `ReduceCapturingByFactor64`,
     * `ReduceCapturingByFactor128`
     */
    factor?: pulumi.Input<string>;
    /**
     * The scaling factor for the defined URL will be applied to any HTTP method.
     */
    httpMethodAny?: pulumi.Input<boolean>;
    /**
     * Possible values: `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`
     */
    httpMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The matching URLs will always be ignored, also if Adaptive Traffic Management is not active.
     */
    ignore?: pulumi.Input<boolean>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Path of the URL.
     */
    path?: pulumi.Input<string>;
    /**
     * Path comparison condition. Possible values: `EQUALS`, `DOES_NOT_EQUAL`, `CONTAINS`, `DOES_NOT_CONTAIN`, `STARTS_WITH`,
     * `DOES_NOT_START_WITH`, `ENDS_WITH`, `DOES_NOT_END_WITH`
     */
    pathComparisonType?: pulumi.Input<string>;
    /**
     * Add URL parameters in any order. **All** specified parameters must be present in the query of an URL to get a match.
     */
    queryParameters?: pulumi.Input<inputs.UrlBasedSamplingQueryParameters>;
    /**
     * The scope of this setting (PROCESS_GROUP_INSTANCE, PROCESS_GROUP). Omit this property if you want to cover the whole
     * environment.
     */
    scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UrlBasedSampling resource.
 */
export interface UrlBasedSamplingArgs {
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Select the scaling factor for the current sampling rate of the system. Possible values: `IncreaseCapturing128Times`,
     * `IncreaseCapturing64Times`, `IncreaseCapturing32Times`, `IncreaseCapturing16Times`, `IncreaseCapturing8Times`,
     * `IncreaseCapturing4Times`, `IncreaseCapturing2Times`, `ReduceCapturingByFactor2`, `ReduceCapturingByFactor4`,
     * `ReduceCapturingByFactor8`, `ReduceCapturingByFactor16`, `ReduceCapturingByFactor32`, `ReduceCapturingByFactor64`,
     * `ReduceCapturingByFactor128`
     */
    factor?: pulumi.Input<string>;
    /**
     * The scaling factor for the defined URL will be applied to any HTTP method.
     */
    httpMethodAny: pulumi.Input<boolean>;
    /**
     * Possible values: `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`
     */
    httpMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The matching URLs will always be ignored, also if Adaptive Traffic Management is not active.
     */
    ignore: pulumi.Input<boolean>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Path of the URL.
     */
    path?: pulumi.Input<string>;
    /**
     * Path comparison condition. Possible values: `EQUALS`, `DOES_NOT_EQUAL`, `CONTAINS`, `DOES_NOT_CONTAIN`, `STARTS_WITH`,
     * `DOES_NOT_START_WITH`, `ENDS_WITH`, `DOES_NOT_END_WITH`
     */
    pathComparisonType?: pulumi.Input<string>;
    /**
     * Add URL parameters in any order. **All** specified parameters must be present in the query of an URL to get a match.
     */
    queryParameters?: pulumi.Input<inputs.UrlBasedSamplingQueryParameters>;
    /**
     * The scope of this setting (PROCESS_GROUP_INSTANCE, PROCESS_GROUP). Omit this property if you want to cover the whole
     * environment.
     */
    scope?: pulumi.Input<string>;
}
