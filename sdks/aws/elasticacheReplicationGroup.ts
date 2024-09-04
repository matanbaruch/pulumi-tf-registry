// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ElasticacheReplicationGroup extends pulumi.CustomResource {
    /**
     * Get an existing ElasticacheReplicationGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElasticacheReplicationGroupState, opts?: pulumi.CustomResourceOptions): ElasticacheReplicationGroup {
        return new ElasticacheReplicationGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/elasticacheReplicationGroup:ElasticacheReplicationGroup';

    /**
     * Returns true if the given object is an instance of ElasticacheReplicationGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticacheReplicationGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticacheReplicationGroup.__pulumiType;
    }

    public readonly applyImmediately!: pulumi.Output<boolean>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly atRestEncryptionEnabled!: pulumi.Output<boolean>;
    public readonly authToken!: pulumi.Output<string | undefined>;
    public readonly authTokenUpdateStrategy!: pulumi.Output<string | undefined>;
    public readonly autoMinorVersionUpgrade!: pulumi.Output<string>;
    public readonly automaticFailoverEnabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly clusterEnabled!: pulumi.Output<boolean>;
    public readonly clusterMode!: pulumi.Output<string>;
    public /*out*/ readonly configurationEndpointAddress!: pulumi.Output<string>;
    public readonly dataTieringEnabled!: pulumi.Output<boolean>;
    public readonly description!: pulumi.Output<string>;
    public readonly engine!: pulumi.Output<string | undefined>;
    public readonly engineVersion!: pulumi.Output<string>;
    public /*out*/ readonly engineVersionActual!: pulumi.Output<string>;
    public readonly finalSnapshotIdentifier!: pulumi.Output<string | undefined>;
    public readonly globalReplicationGroupId!: pulumi.Output<string>;
    public readonly ipDiscovery!: pulumi.Output<string>;
    public readonly kmsKeyId!: pulumi.Output<string | undefined>;
    public readonly logDeliveryConfigurations!: pulumi.Output<outputs.ElasticacheReplicationGroupLogDeliveryConfiguration[] | undefined>;
    public readonly maintenanceWindow!: pulumi.Output<string>;
    public /*out*/ readonly memberClusters!: pulumi.Output<string[]>;
    public readonly multiAzEnabled!: pulumi.Output<boolean | undefined>;
    public readonly networkType!: pulumi.Output<string>;
    public readonly nodeType!: pulumi.Output<string>;
    public readonly notificationTopicArn!: pulumi.Output<string | undefined>;
    public readonly numCacheClusters!: pulumi.Output<number>;
    public readonly numNodeGroups!: pulumi.Output<number>;
    public readonly parameterGroupName!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly preferredCacheClusterAzs!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly primaryEndpointAddress!: pulumi.Output<string>;
    public /*out*/ readonly readerEndpointAddress!: pulumi.Output<string>;
    public readonly replicasPerNodeGroup!: pulumi.Output<number>;
    public readonly replicationGroupId!: pulumi.Output<string>;
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    public readonly securityGroupNames!: pulumi.Output<string[]>;
    public readonly snapshotArns!: pulumi.Output<string[] | undefined>;
    public readonly snapshotName!: pulumi.Output<string | undefined>;
    public readonly snapshotRetentionLimit!: pulumi.Output<number | undefined>;
    public readonly snapshotWindow!: pulumi.Output<string>;
    public readonly subnetGroupName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.ElasticacheReplicationGroupTimeouts | undefined>;
    public readonly transitEncryptionEnabled!: pulumi.Output<boolean>;
    public readonly transitEncryptionMode!: pulumi.Output<string>;
    public readonly userGroupIds!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ElasticacheReplicationGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticacheReplicationGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElasticacheReplicationGroupArgs | ElasticacheReplicationGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ElasticacheReplicationGroupState | undefined;
            resourceInputs["applyImmediately"] = state ? state.applyImmediately : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["atRestEncryptionEnabled"] = state ? state.atRestEncryptionEnabled : undefined;
            resourceInputs["authToken"] = state ? state.authToken : undefined;
            resourceInputs["authTokenUpdateStrategy"] = state ? state.authTokenUpdateStrategy : undefined;
            resourceInputs["autoMinorVersionUpgrade"] = state ? state.autoMinorVersionUpgrade : undefined;
            resourceInputs["automaticFailoverEnabled"] = state ? state.automaticFailoverEnabled : undefined;
            resourceInputs["clusterEnabled"] = state ? state.clusterEnabled : undefined;
            resourceInputs["clusterMode"] = state ? state.clusterMode : undefined;
            resourceInputs["configurationEndpointAddress"] = state ? state.configurationEndpointAddress : undefined;
            resourceInputs["dataTieringEnabled"] = state ? state.dataTieringEnabled : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["engine"] = state ? state.engine : undefined;
            resourceInputs["engineVersion"] = state ? state.engineVersion : undefined;
            resourceInputs["engineVersionActual"] = state ? state.engineVersionActual : undefined;
            resourceInputs["finalSnapshotIdentifier"] = state ? state.finalSnapshotIdentifier : undefined;
            resourceInputs["globalReplicationGroupId"] = state ? state.globalReplicationGroupId : undefined;
            resourceInputs["ipDiscovery"] = state ? state.ipDiscovery : undefined;
            resourceInputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            resourceInputs["logDeliveryConfigurations"] = state ? state.logDeliveryConfigurations : undefined;
            resourceInputs["maintenanceWindow"] = state ? state.maintenanceWindow : undefined;
            resourceInputs["memberClusters"] = state ? state.memberClusters : undefined;
            resourceInputs["multiAzEnabled"] = state ? state.multiAzEnabled : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["nodeType"] = state ? state.nodeType : undefined;
            resourceInputs["notificationTopicArn"] = state ? state.notificationTopicArn : undefined;
            resourceInputs["numCacheClusters"] = state ? state.numCacheClusters : undefined;
            resourceInputs["numNodeGroups"] = state ? state.numNodeGroups : undefined;
            resourceInputs["parameterGroupName"] = state ? state.parameterGroupName : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["preferredCacheClusterAzs"] = state ? state.preferredCacheClusterAzs : undefined;
            resourceInputs["primaryEndpointAddress"] = state ? state.primaryEndpointAddress : undefined;
            resourceInputs["readerEndpointAddress"] = state ? state.readerEndpointAddress : undefined;
            resourceInputs["replicasPerNodeGroup"] = state ? state.replicasPerNodeGroup : undefined;
            resourceInputs["replicationGroupId"] = state ? state.replicationGroupId : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["securityGroupNames"] = state ? state.securityGroupNames : undefined;
            resourceInputs["snapshotArns"] = state ? state.snapshotArns : undefined;
            resourceInputs["snapshotName"] = state ? state.snapshotName : undefined;
            resourceInputs["snapshotRetentionLimit"] = state ? state.snapshotRetentionLimit : undefined;
            resourceInputs["snapshotWindow"] = state ? state.snapshotWindow : undefined;
            resourceInputs["subnetGroupName"] = state ? state.subnetGroupName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["transitEncryptionEnabled"] = state ? state.transitEncryptionEnabled : undefined;
            resourceInputs["transitEncryptionMode"] = state ? state.transitEncryptionMode : undefined;
            resourceInputs["userGroupIds"] = state ? state.userGroupIds : undefined;
        } else {
            const args = argsOrState as ElasticacheReplicationGroupArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.replicationGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'replicationGroupId'");
            }
            resourceInputs["applyImmediately"] = args ? args.applyImmediately : undefined;
            resourceInputs["atRestEncryptionEnabled"] = args ? args.atRestEncryptionEnabled : undefined;
            resourceInputs["authToken"] = args?.authToken ? pulumi.secret(args.authToken) : undefined;
            resourceInputs["authTokenUpdateStrategy"] = args ? args.authTokenUpdateStrategy : undefined;
            resourceInputs["autoMinorVersionUpgrade"] = args ? args.autoMinorVersionUpgrade : undefined;
            resourceInputs["automaticFailoverEnabled"] = args ? args.automaticFailoverEnabled : undefined;
            resourceInputs["clusterMode"] = args ? args.clusterMode : undefined;
            resourceInputs["dataTieringEnabled"] = args ? args.dataTieringEnabled : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["engine"] = args ? args.engine : undefined;
            resourceInputs["engineVersion"] = args ? args.engineVersion : undefined;
            resourceInputs["finalSnapshotIdentifier"] = args ? args.finalSnapshotIdentifier : undefined;
            resourceInputs["globalReplicationGroupId"] = args ? args.globalReplicationGroupId : undefined;
            resourceInputs["ipDiscovery"] = args ? args.ipDiscovery : undefined;
            resourceInputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            resourceInputs["logDeliveryConfigurations"] = args ? args.logDeliveryConfigurations : undefined;
            resourceInputs["maintenanceWindow"] = args ? args.maintenanceWindow : undefined;
            resourceInputs["multiAzEnabled"] = args ? args.multiAzEnabled : undefined;
            resourceInputs["networkType"] = args ? args.networkType : undefined;
            resourceInputs["nodeType"] = args ? args.nodeType : undefined;
            resourceInputs["notificationTopicArn"] = args ? args.notificationTopicArn : undefined;
            resourceInputs["numCacheClusters"] = args ? args.numCacheClusters : undefined;
            resourceInputs["numNodeGroups"] = args ? args.numNodeGroups : undefined;
            resourceInputs["parameterGroupName"] = args ? args.parameterGroupName : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["preferredCacheClusterAzs"] = args ? args.preferredCacheClusterAzs : undefined;
            resourceInputs["replicasPerNodeGroup"] = args ? args.replicasPerNodeGroup : undefined;
            resourceInputs["replicationGroupId"] = args ? args.replicationGroupId : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["securityGroupNames"] = args ? args.securityGroupNames : undefined;
            resourceInputs["snapshotArns"] = args ? args.snapshotArns : undefined;
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
            resourceInputs["snapshotRetentionLimit"] = args ? args.snapshotRetentionLimit : undefined;
            resourceInputs["snapshotWindow"] = args ? args.snapshotWindow : undefined;
            resourceInputs["subnetGroupName"] = args ? args.subnetGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["transitEncryptionEnabled"] = args ? args.transitEncryptionEnabled : undefined;
            resourceInputs["transitEncryptionMode"] = args ? args.transitEncryptionMode : undefined;
            resourceInputs["userGroupIds"] = args ? args.userGroupIds : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["clusterEnabled"] = undefined /*out*/;
            resourceInputs["configurationEndpointAddress"] = undefined /*out*/;
            resourceInputs["engineVersionActual"] = undefined /*out*/;
            resourceInputs["memberClusters"] = undefined /*out*/;
            resourceInputs["primaryEndpointAddress"] = undefined /*out*/;
            resourceInputs["readerEndpointAddress"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ElasticacheReplicationGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ElasticacheReplicationGroup resources.
 */
export interface ElasticacheReplicationGroupState {
    applyImmediately?: pulumi.Input<boolean>;
    arn?: pulumi.Input<string>;
    atRestEncryptionEnabled?: pulumi.Input<boolean>;
    authToken?: pulumi.Input<string>;
    authTokenUpdateStrategy?: pulumi.Input<string>;
    autoMinorVersionUpgrade?: pulumi.Input<string>;
    automaticFailoverEnabled?: pulumi.Input<boolean>;
    clusterEnabled?: pulumi.Input<boolean>;
    clusterMode?: pulumi.Input<string>;
    configurationEndpointAddress?: pulumi.Input<string>;
    dataTieringEnabled?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    engine?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    engineVersionActual?: pulumi.Input<string>;
    finalSnapshotIdentifier?: pulumi.Input<string>;
    globalReplicationGroupId?: pulumi.Input<string>;
    ipDiscovery?: pulumi.Input<string>;
    kmsKeyId?: pulumi.Input<string>;
    logDeliveryConfigurations?: pulumi.Input<pulumi.Input<inputs.ElasticacheReplicationGroupLogDeliveryConfiguration>[]>;
    maintenanceWindow?: pulumi.Input<string>;
    memberClusters?: pulumi.Input<pulumi.Input<string>[]>;
    multiAzEnabled?: pulumi.Input<boolean>;
    networkType?: pulumi.Input<string>;
    nodeType?: pulumi.Input<string>;
    notificationTopicArn?: pulumi.Input<string>;
    numCacheClusters?: pulumi.Input<number>;
    numNodeGroups?: pulumi.Input<number>;
    parameterGroupName?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    preferredCacheClusterAzs?: pulumi.Input<pulumi.Input<string>[]>;
    primaryEndpointAddress?: pulumi.Input<string>;
    readerEndpointAddress?: pulumi.Input<string>;
    replicasPerNodeGroup?: pulumi.Input<number>;
    replicationGroupId?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    securityGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    snapshotArns?: pulumi.Input<pulumi.Input<string>[]>;
    snapshotName?: pulumi.Input<string>;
    snapshotRetentionLimit?: pulumi.Input<number>;
    snapshotWindow?: pulumi.Input<string>;
    subnetGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ElasticacheReplicationGroupTimeouts>;
    transitEncryptionEnabled?: pulumi.Input<boolean>;
    transitEncryptionMode?: pulumi.Input<string>;
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ElasticacheReplicationGroup resource.
 */
export interface ElasticacheReplicationGroupArgs {
    applyImmediately?: pulumi.Input<boolean>;
    atRestEncryptionEnabled?: pulumi.Input<boolean>;
    authToken?: pulumi.Input<string>;
    authTokenUpdateStrategy?: pulumi.Input<string>;
    autoMinorVersionUpgrade?: pulumi.Input<string>;
    automaticFailoverEnabled?: pulumi.Input<boolean>;
    clusterMode?: pulumi.Input<string>;
    dataTieringEnabled?: pulumi.Input<boolean>;
    description: pulumi.Input<string>;
    engine?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    finalSnapshotIdentifier?: pulumi.Input<string>;
    globalReplicationGroupId?: pulumi.Input<string>;
    ipDiscovery?: pulumi.Input<string>;
    kmsKeyId?: pulumi.Input<string>;
    logDeliveryConfigurations?: pulumi.Input<pulumi.Input<inputs.ElasticacheReplicationGroupLogDeliveryConfiguration>[]>;
    maintenanceWindow?: pulumi.Input<string>;
    multiAzEnabled?: pulumi.Input<boolean>;
    networkType?: pulumi.Input<string>;
    nodeType?: pulumi.Input<string>;
    notificationTopicArn?: pulumi.Input<string>;
    numCacheClusters?: pulumi.Input<number>;
    numNodeGroups?: pulumi.Input<number>;
    parameterGroupName?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    preferredCacheClusterAzs?: pulumi.Input<pulumi.Input<string>[]>;
    replicasPerNodeGroup?: pulumi.Input<number>;
    replicationGroupId: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    securityGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    snapshotArns?: pulumi.Input<pulumi.Input<string>[]>;
    snapshotName?: pulumi.Input<string>;
    snapshotRetentionLimit?: pulumi.Input<number>;
    snapshotWindow?: pulumi.Input<string>;
    subnetGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ElasticacheReplicationGroupTimeouts>;
    transitEncryptionEnabled?: pulumi.Input<boolean>;
    transitEncryptionMode?: pulumi.Input<string>;
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}
