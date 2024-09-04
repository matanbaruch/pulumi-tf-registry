// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NdbProfile extends pulumi.CustomResource {
    /**
     * Get an existing NdbProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NdbProfileState, opts?: pulumi.CustomResourceOptions): NdbProfile {
        return new NdbProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nutanix:index/ndbProfile:NdbProfile';

    /**
     * Returns true if the given object is an instance of NdbProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NdbProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NdbProfile.__pulumiType;
    }

    public /*out*/ readonly assocDatabases!: pulumi.Output<string[]>;
    public /*out*/ readonly assocDbServers!: pulumi.Output<string[]>;
    public /*out*/ readonly clusterAvailabilities!: pulumi.Output<outputs.NdbProfileClusterAvailability[]>;
    public readonly computeProfiles!: pulumi.Output<outputs.NdbProfileComputeProfile[] | undefined>;
    public readonly databaseParameterProfiles!: pulumi.Output<outputs.NdbProfileDatabaseParameterProfile[] | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly engineType!: pulumi.Output<string>;
    public /*out*/ readonly latestVersion!: pulumi.Output<string>;
    public /*out*/ readonly latestVersionId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkProfiles!: pulumi.Output<outputs.NdbProfileNetworkProfile[] | undefined>;
    public /*out*/ readonly nxClusterId!: pulumi.Output<string>;
    public /*out*/ readonly owner!: pulumi.Output<string>;
    public readonly published!: pulumi.Output<boolean | undefined>;
    public readonly softwareProfile!: pulumi.Output<outputs.NdbProfileSoftwareProfile | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly versions!: pulumi.Output<outputs.NdbProfileVersion[]>;

    /**
     * Create a NdbProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NdbProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NdbProfileArgs | NdbProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NdbProfileState | undefined;
            resourceInputs["assocDatabases"] = state ? state.assocDatabases : undefined;
            resourceInputs["assocDbServers"] = state ? state.assocDbServers : undefined;
            resourceInputs["clusterAvailabilities"] = state ? state.clusterAvailabilities : undefined;
            resourceInputs["computeProfiles"] = state ? state.computeProfiles : undefined;
            resourceInputs["databaseParameterProfiles"] = state ? state.databaseParameterProfiles : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["engineType"] = state ? state.engineType : undefined;
            resourceInputs["latestVersion"] = state ? state.latestVersion : undefined;
            resourceInputs["latestVersionId"] = state ? state.latestVersionId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkProfiles"] = state ? state.networkProfiles : undefined;
            resourceInputs["nxClusterId"] = state ? state.nxClusterId : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["published"] = state ? state.published : undefined;
            resourceInputs["softwareProfile"] = state ? state.softwareProfile : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["versions"] = state ? state.versions : undefined;
        } else {
            const args = argsOrState as NdbProfileArgs | undefined;
            resourceInputs["computeProfiles"] = args ? args.computeProfiles : undefined;
            resourceInputs["databaseParameterProfiles"] = args ? args.databaseParameterProfiles : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["engineType"] = args ? args.engineType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkProfiles"] = args ? args.networkProfiles : undefined;
            resourceInputs["published"] = args ? args.published : undefined;
            resourceInputs["softwareProfile"] = args ? args.softwareProfile : undefined;
            resourceInputs["assocDatabases"] = undefined /*out*/;
            resourceInputs["assocDbServers"] = undefined /*out*/;
            resourceInputs["clusterAvailabilities"] = undefined /*out*/;
            resourceInputs["latestVersion"] = undefined /*out*/;
            resourceInputs["latestVersionId"] = undefined /*out*/;
            resourceInputs["nxClusterId"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["versions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NdbProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NdbProfile resources.
 */
export interface NdbProfileState {
    assocDatabases?: pulumi.Input<pulumi.Input<string>[]>;
    assocDbServers?: pulumi.Input<pulumi.Input<string>[]>;
    clusterAvailabilities?: pulumi.Input<pulumi.Input<inputs.NdbProfileClusterAvailability>[]>;
    computeProfiles?: pulumi.Input<pulumi.Input<inputs.NdbProfileComputeProfile>[]>;
    databaseParameterProfiles?: pulumi.Input<pulumi.Input<inputs.NdbProfileDatabaseParameterProfile>[]>;
    description?: pulumi.Input<string>;
    engineType?: pulumi.Input<string>;
    latestVersion?: pulumi.Input<string>;
    latestVersionId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkProfiles?: pulumi.Input<pulumi.Input<inputs.NdbProfileNetworkProfile>[]>;
    nxClusterId?: pulumi.Input<string>;
    owner?: pulumi.Input<string>;
    published?: pulumi.Input<boolean>;
    softwareProfile?: pulumi.Input<inputs.NdbProfileSoftwareProfile>;
    status?: pulumi.Input<string>;
    versions?: pulumi.Input<pulumi.Input<inputs.NdbProfileVersion>[]>;
}

/**
 * The set of arguments for constructing a NdbProfile resource.
 */
export interface NdbProfileArgs {
    computeProfiles?: pulumi.Input<pulumi.Input<inputs.NdbProfileComputeProfile>[]>;
    databaseParameterProfiles?: pulumi.Input<pulumi.Input<inputs.NdbProfileDatabaseParameterProfile>[]>;
    description?: pulumi.Input<string>;
    engineType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkProfiles?: pulumi.Input<pulumi.Input<inputs.NdbProfileNetworkProfile>[]>;
    published?: pulumi.Input<boolean>;
    softwareProfile?: pulumi.Input<inputs.NdbProfileSoftwareProfile>;
}
