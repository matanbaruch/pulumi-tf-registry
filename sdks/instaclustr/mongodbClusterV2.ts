// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MongodbClusterV2 extends pulumi.CustomResource {
    /**
     * Get an existing MongodbClusterV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MongodbClusterV2State, opts?: pulumi.CustomResourceOptions): MongodbClusterV2 {
        return new MongodbClusterV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'instaclustr:index/mongodbClusterV2:MongodbClusterV2';

    /**
     * Returns true if the given object is an instance of MongodbClusterV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongodbClusterV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongodbClusterV2.__pulumiType;
    }

    /**
     * Connection string to connect to MongoDB. It will include default user details if available. Password may be out of date
     * if the user has changed this since cluster creation.
     */
    public readonly connectionString!: pulumi.Output<string>;
    /**
     * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
     */
    public readonly currentClusterOperationStatus!: pulumi.Output<string>;
    /**
     * List of data centre settings.
     */
    public readonly dataCentres!: pulumi.Output<outputs.MongodbClusterV2DataCentre[]>;
    /**
     * A description of the cluster
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Key/Value pairs of mongod configuration options to override from the platform defaults
     */
    public readonly mongodbConfigurations!: pulumi.Output<outputs.MongodbClusterV2MongodbConfiguration[] | undefined>;
    /**
     * List of command objects to run against the admin database on cluster creation. Equivalent to running db.adminCommand()
     */
    public readonly mongodbInitCommands!: pulumi.Output<string[] | undefined>;
    /**
     * Version of MongoDB to run on the cluster. Available versions: <ul> <li>`6.0.6`</li> <li>`6.0.8`</li> </ul>
     */
    public readonly mongodbVersion!: pulumi.Output<string>;
    /**
     * Name of the cluster.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Creates a PCI compliant cluster, see [PCI
     * Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
     */
    public readonly pciComplianceMode!: pulumi.Output<boolean>;
    /**
     * Creates the cluster with private network only, see [Private Network
     * Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
     */
    public readonly privateNetworkCluster!: pulumi.Output<boolean>;
    /**
     * Settings to determine how resize requests will be performed for the cluster.
     */
    public readonly resizeSettings!: pulumi.Output<outputs.MongodbClusterV2ResizeSetting[] | undefined>;
    /**
     * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is
     * not available when using Developer class nodes. See [SLA
     * Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
     */
    public readonly slaTier!: pulumi.Output<string>;
    /**
     * Status of the cluster.
     */
    public readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MongodbClusterV2Timeouts | undefined>;
    public readonly twoFactorDeletes!: pulumi.Output<outputs.MongodbClusterV2TwoFactorDelete[] | undefined>;

    /**
     * Create a MongodbClusterV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongodbClusterV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MongodbClusterV2Args | MongodbClusterV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MongodbClusterV2State | undefined;
            resourceInputs["connectionString"] = state ? state.connectionString : undefined;
            resourceInputs["currentClusterOperationStatus"] = state ? state.currentClusterOperationStatus : undefined;
            resourceInputs["dataCentres"] = state ? state.dataCentres : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["mongodbConfigurations"] = state ? state.mongodbConfigurations : undefined;
            resourceInputs["mongodbInitCommands"] = state ? state.mongodbInitCommands : undefined;
            resourceInputs["mongodbVersion"] = state ? state.mongodbVersion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pciComplianceMode"] = state ? state.pciComplianceMode : undefined;
            resourceInputs["privateNetworkCluster"] = state ? state.privateNetworkCluster : undefined;
            resourceInputs["resizeSettings"] = state ? state.resizeSettings : undefined;
            resourceInputs["slaTier"] = state ? state.slaTier : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["twoFactorDeletes"] = state ? state.twoFactorDeletes : undefined;
        } else {
            const args = argsOrState as MongodbClusterV2Args | undefined;
            if ((!args || args.dataCentres === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataCentres'");
            }
            if ((!args || args.mongodbVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mongodbVersion'");
            }
            if ((!args || args.pciComplianceMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pciComplianceMode'");
            }
            if ((!args || args.privateNetworkCluster === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateNetworkCluster'");
            }
            if ((!args || args.slaTier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slaTier'");
            }
            resourceInputs["connectionString"] = args?.connectionString ? pulumi.secret(args.connectionString) : undefined;
            resourceInputs["currentClusterOperationStatus"] = args ? args.currentClusterOperationStatus : undefined;
            resourceInputs["dataCentres"] = args ? args.dataCentres : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["mongodbConfigurations"] = args ? args.mongodbConfigurations : undefined;
            resourceInputs["mongodbInitCommands"] = args?.mongodbInitCommands ? pulumi.secret(args.mongodbInitCommands) : undefined;
            resourceInputs["mongodbVersion"] = args ? args.mongodbVersion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pciComplianceMode"] = args ? args.pciComplianceMode : undefined;
            resourceInputs["privateNetworkCluster"] = args ? args.privateNetworkCluster : undefined;
            resourceInputs["resizeSettings"] = args ? args.resizeSettings : undefined;
            resourceInputs["slaTier"] = args ? args.slaTier : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["twoFactorDeletes"] = args ? args.twoFactorDeletes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["connectionString", "mongodbInitCommands"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MongodbClusterV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MongodbClusterV2 resources.
 */
export interface MongodbClusterV2State {
    /**
     * Connection string to connect to MongoDB. It will include default user details if available. Password may be out of date
     * if the user has changed this since cluster creation.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
     */
    currentClusterOperationStatus?: pulumi.Input<string>;
    /**
     * List of data centre settings.
     */
    dataCentres?: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2DataCentre>[]>;
    /**
     * A description of the cluster
     */
    description?: pulumi.Input<string>;
    /**
     * Key/Value pairs of mongod configuration options to override from the platform defaults
     */
    mongodbConfigurations?: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2MongodbConfiguration>[]>;
    /**
     * List of command objects to run against the admin database on cluster creation. Equivalent to running db.adminCommand()
     */
    mongodbInitCommands?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of MongoDB to run on the cluster. Available versions: <ul> <li>`6.0.6`</li> <li>`6.0.8`</li> </ul>
     */
    mongodbVersion?: pulumi.Input<string>;
    /**
     * Name of the cluster.
     */
    name?: pulumi.Input<string>;
    /**
     * Creates a PCI compliant cluster, see [PCI
     * Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
     */
    pciComplianceMode?: pulumi.Input<boolean>;
    /**
     * Creates the cluster with private network only, see [Private Network
     * Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
     */
    privateNetworkCluster?: pulumi.Input<boolean>;
    /**
     * Settings to determine how resize requests will be performed for the cluster.
     */
    resizeSettings?: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2ResizeSetting>[]>;
    /**
     * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is
     * not available when using Developer class nodes. See [SLA
     * Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
     */
    slaTier?: pulumi.Input<string>;
    /**
     * Status of the cluster.
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MongodbClusterV2Timeouts>;
    twoFactorDeletes?: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2TwoFactorDelete>[]>;
}

/**
 * The set of arguments for constructing a MongodbClusterV2 resource.
 */
export interface MongodbClusterV2Args {
    /**
     * Connection string to connect to MongoDB. It will include default user details if available. Password may be out of date
     * if the user has changed this since cluster creation.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
     */
    currentClusterOperationStatus?: pulumi.Input<string>;
    /**
     * List of data centre settings.
     */
    dataCentres: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2DataCentre>[]>;
    /**
     * A description of the cluster
     */
    description?: pulumi.Input<string>;
    /**
     * Key/Value pairs of mongod configuration options to override from the platform defaults
     */
    mongodbConfigurations?: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2MongodbConfiguration>[]>;
    /**
     * List of command objects to run against the admin database on cluster creation. Equivalent to running db.adminCommand()
     */
    mongodbInitCommands?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of MongoDB to run on the cluster. Available versions: <ul> <li>`6.0.6`</li> <li>`6.0.8`</li> </ul>
     */
    mongodbVersion: pulumi.Input<string>;
    /**
     * Name of the cluster.
     */
    name?: pulumi.Input<string>;
    /**
     * Creates a PCI compliant cluster, see [PCI
     * Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
     */
    pciComplianceMode: pulumi.Input<boolean>;
    /**
     * Creates the cluster with private network only, see [Private Network
     * Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
     */
    privateNetworkCluster: pulumi.Input<boolean>;
    /**
     * Settings to determine how resize requests will be performed for the cluster.
     */
    resizeSettings?: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2ResizeSetting>[]>;
    /**
     * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is
     * not available when using Developer class nodes. See [SLA
     * Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
     */
    slaTier: pulumi.Input<string>;
    /**
     * Status of the cluster.
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MongodbClusterV2Timeouts>;
    twoFactorDeletes?: pulumi.Input<pulumi.Input<inputs.MongodbClusterV2TwoFactorDelete>[]>;
}
