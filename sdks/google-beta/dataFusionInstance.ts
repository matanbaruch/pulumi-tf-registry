// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataFusionInstance extends pulumi.CustomResource {
    /**
     * Get an existing DataFusionInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataFusionInstanceState, opts?: pulumi.CustomResourceOptions): DataFusionInstance {
        return new DataFusionInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/dataFusionInstance:DataFusionInstance';

    /**
     * Returns true if the given object is an instance of DataFusionInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataFusionInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataFusionInstance.__pulumiType;
    }

    public readonly accelerators!: pulumi.Output<outputs.DataFusionInstanceAccelerator[] | undefined>;
    /**
     * Endpoint on which the REST APIs is accessible.
     */
    public /*out*/ readonly apiEndpoint!: pulumi.Output<string>;
    /**
     * The time the instance was created in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
     */
    public readonly cryptoKeyConfig!: pulumi.Output<outputs.DataFusionInstanceCryptoKeyConfig | undefined>;
    /**
     * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing
     * pipelines.
     */
    public readonly dataprocServiceAccount!: pulumi.Output<string | undefined>;
    /**
     * An optional description of the instance.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for an instance.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Option to enable granular role-based access control.
     */
    public readonly enableRbac!: pulumi.Output<boolean | undefined>;
    /**
     * Option to enable Stackdriver Logging.
     */
    public readonly enableStackdriverLogging!: pulumi.Output<boolean | undefined>;
    /**
     * Option to enable Stackdriver Monitoring.
     */
    public readonly enableStackdriverMonitoring!: pulumi.Output<boolean | undefined>;
    /**
     * Option to enable and pass metadata for event publishing.
     */
    public readonly eventPublishConfig!: pulumi.Output<outputs.DataFusionInstanceEventPublishConfig | undefined>;
    /**
     * Cloud Storage bucket generated by Data Fusion in the customer project.
     */
    public /*out*/ readonly gcsBucket!: pulumi.Output<string>;
    /**
     * The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.
     * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
     * to the field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The ID of the instance or a fully qualified identifier for the instance.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Network configuration options. These are required when a private Data Fusion instance is to be created.
     */
    public readonly networkConfig!: pulumi.Output<outputs.DataFusionInstanceNetworkConfig | undefined>;
    /**
     * Map of additional options used to configure the behavior of Data Fusion instance.
     */
    public readonly options!: pulumi.Output<{[key: string]: string}>;
    /**
     * P4 service account for the customer project.
     */
    public /*out*/ readonly p4ServiceAccount!: pulumi.Output<string>;
    /**
     * Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP
     * addresses and will not be able to access the public internet.
     */
    public readonly privateInstance!: pulumi.Output<boolean | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The region of the Data Fusion instance.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * Service account which will be used to access resources in the customer project.
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly serviceAccount!: pulumi.Output<string>;
    /**
     * Endpoint on which the Data Fusion UI and REST APIs are accessible.
     */
    public /*out*/ readonly serviceEndpoint!: pulumi.Output<string>;
    /**
     * The current state of this Data Fusion instance. - CREATING: Instance is being created - RUNNING: Instance is running and
     * ready for requests - FAILED: Instance creation failed - DELETING: Instance is being deleted - UPGRADING: Instance is
     * being upgraded - RESTARTING: Instance is being restarted
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Additional information about the current state of this Data Fusion instance if available.
     */
    public /*out*/ readonly stateMessage!: pulumi.Output<string>;
    /**
     * The name of the tenant project.
     */
    public /*out*/ readonly tenantProjectId!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.DataFusionInstanceTimeouts | undefined>;
    /**
     * Represents the type of Data Fusion instance. Each type is configured with the default settings for processing and
     * memory. - BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines using point
     * and click UI. However, there are certain limitations, such as fewer number of concurrent pipelines, no support for
     * streaming pipelines, etc. - ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more
     * features available, such as support for streaming pipelines, higher number of concurrent pipelines, etc. - DEVELOPER:
     * Developer Data Fusion instance. In Developer type, the user will have all features available but with restrictive
     * capabilities. This is to help enterprises design and develop their data ingestion and integration pipelines at low cost.
     * Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The time the instance was last updated in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;
    /**
     * Current version of the Data Fusion.
     */
    public readonly version!: pulumi.Output<string>;
    /**
     * Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a DataFusionInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataFusionInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataFusionInstanceArgs | DataFusionInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataFusionInstanceState | undefined;
            resourceInputs["accelerators"] = state ? state.accelerators : undefined;
            resourceInputs["apiEndpoint"] = state ? state.apiEndpoint : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["cryptoKeyConfig"] = state ? state.cryptoKeyConfig : undefined;
            resourceInputs["dataprocServiceAccount"] = state ? state.dataprocServiceAccount : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["enableRbac"] = state ? state.enableRbac : undefined;
            resourceInputs["enableStackdriverLogging"] = state ? state.enableStackdriverLogging : undefined;
            resourceInputs["enableStackdriverMonitoring"] = state ? state.enableStackdriverMonitoring : undefined;
            resourceInputs["eventPublishConfig"] = state ? state.eventPublishConfig : undefined;
            resourceInputs["gcsBucket"] = state ? state.gcsBucket : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkConfig"] = state ? state.networkConfig : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["p4ServiceAccount"] = state ? state.p4ServiceAccount : undefined;
            resourceInputs["privateInstance"] = state ? state.privateInstance : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["serviceAccount"] = state ? state.serviceAccount : undefined;
            resourceInputs["serviceEndpoint"] = state ? state.serviceEndpoint : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["stateMessage"] = state ? state.stateMessage : undefined;
            resourceInputs["tenantProjectId"] = state ? state.tenantProjectId : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as DataFusionInstanceArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["accelerators"] = args ? args.accelerators : undefined;
            resourceInputs["cryptoKeyConfig"] = args ? args.cryptoKeyConfig : undefined;
            resourceInputs["dataprocServiceAccount"] = args ? args.dataprocServiceAccount : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enableRbac"] = args ? args.enableRbac : undefined;
            resourceInputs["enableStackdriverLogging"] = args ? args.enableStackdriverLogging : undefined;
            resourceInputs["enableStackdriverMonitoring"] = args ? args.enableStackdriverMonitoring : undefined;
            resourceInputs["eventPublishConfig"] = args ? args.eventPublishConfig : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkConfig"] = args ? args.networkConfig : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["privateInstance"] = args ? args.privateInstance : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["apiEndpoint"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["gcsBucket"] = undefined /*out*/;
            resourceInputs["p4ServiceAccount"] = undefined /*out*/;
            resourceInputs["serviceAccount"] = undefined /*out*/;
            resourceInputs["serviceEndpoint"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateMessage"] = undefined /*out*/;
            resourceInputs["tenantProjectId"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataFusionInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataFusionInstance resources.
 */
export interface DataFusionInstanceState {
    accelerators?: pulumi.Input<pulumi.Input<inputs.DataFusionInstanceAccelerator>[]>;
    /**
     * Endpoint on which the REST APIs is accessible.
     */
    apiEndpoint?: pulumi.Input<string>;
    /**
     * The time the instance was created in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
     */
    cryptoKeyConfig?: pulumi.Input<inputs.DataFusionInstanceCryptoKeyConfig>;
    /**
     * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing
     * pipelines.
     */
    dataprocServiceAccount?: pulumi.Input<string>;
    /**
     * An optional description of the instance.
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for an instance.
     */
    displayName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Option to enable granular role-based access control.
     */
    enableRbac?: pulumi.Input<boolean>;
    /**
     * Option to enable Stackdriver Logging.
     */
    enableStackdriverLogging?: pulumi.Input<boolean>;
    /**
     * Option to enable Stackdriver Monitoring.
     */
    enableStackdriverMonitoring?: pulumi.Input<boolean>;
    /**
     * Option to enable and pass metadata for event publishing.
     */
    eventPublishConfig?: pulumi.Input<inputs.DataFusionInstanceEventPublishConfig>;
    /**
     * Cloud Storage bucket generated by Data Fusion in the customer project.
     */
    gcsBucket?: pulumi.Input<string>;
    /**
     * The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.
     * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
     * to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the instance or a fully qualified identifier for the instance.
     */
    name?: pulumi.Input<string>;
    /**
     * Network configuration options. These are required when a private Data Fusion instance is to be created.
     */
    networkConfig?: pulumi.Input<inputs.DataFusionInstanceNetworkConfig>;
    /**
     * Map of additional options used to configure the behavior of Data Fusion instance.
     */
    options?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * P4 service account for the customer project.
     */
    p4ServiceAccount?: pulumi.Input<string>;
    /**
     * Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP
     * addresses and will not be able to access the public internet.
     */
    privateInstance?: pulumi.Input<boolean>;
    project?: pulumi.Input<string>;
    /**
     * The region of the Data Fusion instance.
     */
    region?: pulumi.Input<string>;
    /**
     * Service account which will be used to access resources in the customer project.
     *
     * @deprecated Deprecated
     */
    serviceAccount?: pulumi.Input<string>;
    /**
     * Endpoint on which the Data Fusion UI and REST APIs are accessible.
     */
    serviceEndpoint?: pulumi.Input<string>;
    /**
     * The current state of this Data Fusion instance. - CREATING: Instance is being created - RUNNING: Instance is running and
     * ready for requests - FAILED: Instance creation failed - DELETING: Instance is being deleted - UPGRADING: Instance is
     * being upgraded - RESTARTING: Instance is being restarted
     */
    state?: pulumi.Input<string>;
    /**
     * Additional information about the current state of this Data Fusion instance if available.
     */
    stateMessage?: pulumi.Input<string>;
    /**
     * The name of the tenant project.
     */
    tenantProjectId?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DataFusionInstanceTimeouts>;
    /**
     * Represents the type of Data Fusion instance. Each type is configured with the default settings for processing and
     * memory. - BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines using point
     * and click UI. However, there are certain limitations, such as fewer number of concurrent pipelines, no support for
     * streaming pipelines, etc. - ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more
     * features available, such as support for streaming pipelines, higher number of concurrent pipelines, etc. - DEVELOPER:
     * Developer Data Fusion instance. In Developer type, the user will have all features available but with restrictive
     * capabilities. This is to help enterprises design and develop their data ingestion and integration pipelines at low cost.
     * Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]
     */
    type?: pulumi.Input<string>;
    /**
     * The time the instance was last updated in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
     */
    updateTime?: pulumi.Input<string>;
    /**
     * Current version of the Data Fusion.
     */
    version?: pulumi.Input<string>;
    /**
     * Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DataFusionInstance resource.
 */
export interface DataFusionInstanceArgs {
    accelerators?: pulumi.Input<pulumi.Input<inputs.DataFusionInstanceAccelerator>[]>;
    /**
     * The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
     */
    cryptoKeyConfig?: pulumi.Input<inputs.DataFusionInstanceCryptoKeyConfig>;
    /**
     * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing
     * pipelines.
     */
    dataprocServiceAccount?: pulumi.Input<string>;
    /**
     * An optional description of the instance.
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for an instance.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Option to enable granular role-based access control.
     */
    enableRbac?: pulumi.Input<boolean>;
    /**
     * Option to enable Stackdriver Logging.
     */
    enableStackdriverLogging?: pulumi.Input<boolean>;
    /**
     * Option to enable Stackdriver Monitoring.
     */
    enableStackdriverMonitoring?: pulumi.Input<boolean>;
    /**
     * Option to enable and pass metadata for event publishing.
     */
    eventPublishConfig?: pulumi.Input<inputs.DataFusionInstanceEventPublishConfig>;
    /**
     * The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.
     * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
     * to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the instance or a fully qualified identifier for the instance.
     */
    name?: pulumi.Input<string>;
    /**
     * Network configuration options. These are required when a private Data Fusion instance is to be created.
     */
    networkConfig?: pulumi.Input<inputs.DataFusionInstanceNetworkConfig>;
    /**
     * Map of additional options used to configure the behavior of Data Fusion instance.
     */
    options?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP
     * addresses and will not be able to access the public internet.
     */
    privateInstance?: pulumi.Input<boolean>;
    project?: pulumi.Input<string>;
    /**
     * The region of the Data Fusion instance.
     */
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataFusionInstanceTimeouts>;
    /**
     * Represents the type of Data Fusion instance. Each type is configured with the default settings for processing and
     * memory. - BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines using point
     * and click UI. However, there are certain limitations, such as fewer number of concurrent pipelines, no support for
     * streaming pipelines, etc. - ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more
     * features available, such as support for streaming pipelines, higher number of concurrent pipelines, etc. - DEVELOPER:
     * Developer Data Fusion instance. In Developer type, the user will have all features available but with restrictive
     * capabilities. This is to help enterprises design and develop their data ingestion and integration pipelines at low cost.
     * Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]
     */
    type: pulumi.Input<string>;
    /**
     * Current version of the Data Fusion.
     */
    version?: pulumi.Input<string>;
    /**
     * Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
     */
    zone?: pulumi.Input<string>;
}
