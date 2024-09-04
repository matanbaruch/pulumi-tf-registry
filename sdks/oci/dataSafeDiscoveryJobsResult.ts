// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataSafeDiscoveryJobsResult extends pulumi.CustomResource {
    /**
     * Get an existing DataSafeDiscoveryJobsResult resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataSafeDiscoveryJobsResultState, opts?: pulumi.CustomResourceOptions): DataSafeDiscoveryJobsResult {
        return new DataSafeDiscoveryJobsResult(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/dataSafeDiscoveryJobsResult:DataSafeDiscoveryJobsResult';

    /**
     * Returns true if the given object is an instance of DataSafeDiscoveryJobsResult.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataSafeDiscoveryJobsResult {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataSafeDiscoveryJobsResult.__pulumiType;
    }

    public /*out*/ readonly appDefinedChildColumnKeys!: pulumi.Output<string[]>;
    public /*out*/ readonly appName!: pulumi.Output<string>;
    public /*out*/ readonly columnName!: pulumi.Output<string>;
    public /*out*/ readonly dataType!: pulumi.Output<string>;
    public /*out*/ readonly dbDefinedChildColumnKeys!: pulumi.Output<string[]>;
    /**
     * @deprecated Deprecated
     */
    public readonly discoveryJobId!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public /*out*/ readonly discoveryType!: pulumi.Output<string>;
    public /*out*/ readonly estimatedDataValueCount!: pulumi.Output<string>;
    public /*out*/ readonly isResultApplied!: pulumi.Output<boolean>;
    /**
     * @deprecated Deprecated
     */
    public /*out*/ readonly key!: pulumi.Output<string>;
    public /*out*/ readonly modifiedAttributes!: pulumi.Output<outputs.DataSafeDiscoveryJobsResultModifiedAttribute[]>;
    public /*out*/ readonly object!: pulumi.Output<string>;
    public /*out*/ readonly objectType!: pulumi.Output<string>;
    public /*out*/ readonly parentColumnKeys!: pulumi.Output<string[]>;
    public /*out*/ readonly plannedAction!: pulumi.Output<string>;
    public /*out*/ readonly relationType!: pulumi.Output<string>;
    public /*out*/ readonly sampleDataValues!: pulumi.Output<string[]>;
    public /*out*/ readonly schemaName!: pulumi.Output<string>;
    public /*out*/ readonly sensitiveColumnkey!: pulumi.Output<string>;
    public /*out*/ readonly sensitiveTypeId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DataSafeDiscoveryJobsResultTimeouts | undefined>;

    /**
     * Create a DataSafeDiscoveryJobsResult resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataSafeDiscoveryJobsResultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataSafeDiscoveryJobsResultArgs | DataSafeDiscoveryJobsResultState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataSafeDiscoveryJobsResultState | undefined;
            resourceInputs["appDefinedChildColumnKeys"] = state ? state.appDefinedChildColumnKeys : undefined;
            resourceInputs["appName"] = state ? state.appName : undefined;
            resourceInputs["columnName"] = state ? state.columnName : undefined;
            resourceInputs["dataType"] = state ? state.dataType : undefined;
            resourceInputs["dbDefinedChildColumnKeys"] = state ? state.dbDefinedChildColumnKeys : undefined;
            resourceInputs["discoveryJobId"] = state ? state.discoveryJobId : undefined;
            resourceInputs["discoveryType"] = state ? state.discoveryType : undefined;
            resourceInputs["estimatedDataValueCount"] = state ? state.estimatedDataValueCount : undefined;
            resourceInputs["isResultApplied"] = state ? state.isResultApplied : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["modifiedAttributes"] = state ? state.modifiedAttributes : undefined;
            resourceInputs["object"] = state ? state.object : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["parentColumnKeys"] = state ? state.parentColumnKeys : undefined;
            resourceInputs["plannedAction"] = state ? state.plannedAction : undefined;
            resourceInputs["relationType"] = state ? state.relationType : undefined;
            resourceInputs["sampleDataValues"] = state ? state.sampleDataValues : undefined;
            resourceInputs["schemaName"] = state ? state.schemaName : undefined;
            resourceInputs["sensitiveColumnkey"] = state ? state.sensitiveColumnkey : undefined;
            resourceInputs["sensitiveTypeId"] = state ? state.sensitiveTypeId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DataSafeDiscoveryJobsResultArgs | undefined;
            if ((!args || args.discoveryJobId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'discoveryJobId'");
            }
            resourceInputs["discoveryJobId"] = args ? args.discoveryJobId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["appDefinedChildColumnKeys"] = undefined /*out*/;
            resourceInputs["appName"] = undefined /*out*/;
            resourceInputs["columnName"] = undefined /*out*/;
            resourceInputs["dataType"] = undefined /*out*/;
            resourceInputs["dbDefinedChildColumnKeys"] = undefined /*out*/;
            resourceInputs["discoveryType"] = undefined /*out*/;
            resourceInputs["estimatedDataValueCount"] = undefined /*out*/;
            resourceInputs["isResultApplied"] = undefined /*out*/;
            resourceInputs["key"] = undefined /*out*/;
            resourceInputs["modifiedAttributes"] = undefined /*out*/;
            resourceInputs["object"] = undefined /*out*/;
            resourceInputs["objectType"] = undefined /*out*/;
            resourceInputs["parentColumnKeys"] = undefined /*out*/;
            resourceInputs["plannedAction"] = undefined /*out*/;
            resourceInputs["relationType"] = undefined /*out*/;
            resourceInputs["sampleDataValues"] = undefined /*out*/;
            resourceInputs["schemaName"] = undefined /*out*/;
            resourceInputs["sensitiveColumnkey"] = undefined /*out*/;
            resourceInputs["sensitiveTypeId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataSafeDiscoveryJobsResult.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataSafeDiscoveryJobsResult resources.
 */
export interface DataSafeDiscoveryJobsResultState {
    appDefinedChildColumnKeys?: pulumi.Input<pulumi.Input<string>[]>;
    appName?: pulumi.Input<string>;
    columnName?: pulumi.Input<string>;
    dataType?: pulumi.Input<string>;
    dbDefinedChildColumnKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated Deprecated
     */
    discoveryJobId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    discoveryType?: pulumi.Input<string>;
    estimatedDataValueCount?: pulumi.Input<string>;
    isResultApplied?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    key?: pulumi.Input<string>;
    modifiedAttributes?: pulumi.Input<pulumi.Input<inputs.DataSafeDiscoveryJobsResultModifiedAttribute>[]>;
    object?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    parentColumnKeys?: pulumi.Input<pulumi.Input<string>[]>;
    plannedAction?: pulumi.Input<string>;
    relationType?: pulumi.Input<string>;
    sampleDataValues?: pulumi.Input<pulumi.Input<string>[]>;
    schemaName?: pulumi.Input<string>;
    sensitiveColumnkey?: pulumi.Input<string>;
    sensitiveTypeId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeDiscoveryJobsResultTimeouts>;
}

/**
 * The set of arguments for constructing a DataSafeDiscoveryJobsResult resource.
 */
export interface DataSafeDiscoveryJobsResultArgs {
    /**
     * @deprecated Deprecated
     */
    discoveryJobId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeDiscoveryJobsResultTimeouts>;
}
