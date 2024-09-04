// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Baremetal extends pulumi.CustomResource {
    /**
     * Get an existing Baremetal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BaremetalState, opts?: pulumi.CustomResourceOptions): Baremetal {
        return new Baremetal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gcorelabs:index/baremetal:Baremetal';

    /**
     * Returns true if the given object is an instance of Baremetal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Baremetal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Baremetal.__pulumiType;
    }

    public /*out*/ readonly addresses!: pulumi.Output<outputs.BaremetalAddress[]>;
    public readonly appConfig!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly apptemplateId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly flavor!: pulumi.Output<{[key: string]: string}>;
    public readonly flavorId!: pulumi.Output<string>;
    public readonly imageId!: pulumi.Output<string | undefined>;
    public readonly interfaces!: pulumi.Output<outputs.BaremetalInterface[]>;
    public readonly keypairName!: pulumi.Output<string | undefined>;
    public readonly lastUpdated!: pulumi.Output<string>;
    public readonly metadataMap!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly metadatas!: pulumi.Output<outputs.BaremetalMetadata[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameTemplate!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly nameTemplates!: pulumi.Output<string[] | undefined>;
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly projectId!: pulumi.Output<number | undefined>;
    public readonly projectName!: pulumi.Output<string | undefined>;
    public readonly regionId!: pulumi.Output<number | undefined>;
    public readonly regionName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BaremetalTimeouts | undefined>;
    public readonly userData!: pulumi.Output<string | undefined>;
    public readonly username!: pulumi.Output<string | undefined>;
    public /*out*/ readonly vmState!: pulumi.Output<string>;

    /**
     * Create a Baremetal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BaremetalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BaremetalArgs | BaremetalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BaremetalState | undefined;
            resourceInputs["addresses"] = state ? state.addresses : undefined;
            resourceInputs["appConfig"] = state ? state.appConfig : undefined;
            resourceInputs["apptemplateId"] = state ? state.apptemplateId : undefined;
            resourceInputs["flavor"] = state ? state.flavor : undefined;
            resourceInputs["flavorId"] = state ? state.flavorId : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["keypairName"] = state ? state.keypairName : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["metadataMap"] = state ? state.metadataMap : undefined;
            resourceInputs["metadatas"] = state ? state.metadatas : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameTemplate"] = state ? state.nameTemplate : undefined;
            resourceInputs["nameTemplates"] = state ? state.nameTemplates : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["regionName"] = state ? state.regionName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["vmState"] = state ? state.vmState : undefined;
        } else {
            const args = argsOrState as BaremetalArgs | undefined;
            if ((!args || args.flavorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'flavorId'");
            }
            if ((!args || args.interfaces === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaces'");
            }
            resourceInputs["appConfig"] = args ? args.appConfig : undefined;
            resourceInputs["apptemplateId"] = args ? args.apptemplateId : undefined;
            resourceInputs["flavorId"] = args ? args.flavorId : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["keypairName"] = args ? args.keypairName : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["metadataMap"] = args ? args.metadataMap : undefined;
            resourceInputs["metadatas"] = args ? args.metadatas : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameTemplate"] = args ? args.nameTemplate : undefined;
            resourceInputs["nameTemplates"] = args ? args.nameTemplates : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["regionName"] = args ? args.regionName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["addresses"] = undefined /*out*/;
            resourceInputs["flavor"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["vmState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Baremetal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Baremetal resources.
 */
export interface BaremetalState {
    addresses?: pulumi.Input<pulumi.Input<inputs.BaremetalAddress>[]>;
    appConfig?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    apptemplateId?: pulumi.Input<string>;
    flavor?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    flavorId?: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.BaremetalInterface>[]>;
    keypairName?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * @deprecated Deprecated
     */
    metadatas?: pulumi.Input<pulumi.Input<inputs.BaremetalMetadata>[]>;
    name?: pulumi.Input<string>;
    nameTemplate?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    nameTemplates?: pulumi.Input<pulumi.Input<string>[]>;
    password?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BaremetalTimeouts>;
    userData?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    vmState?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Baremetal resource.
 */
export interface BaremetalArgs {
    appConfig?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    apptemplateId?: pulumi.Input<string>;
    flavorId: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
    interfaces: pulumi.Input<pulumi.Input<inputs.BaremetalInterface>[]>;
    keypairName?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * @deprecated Deprecated
     */
    metadatas?: pulumi.Input<pulumi.Input<inputs.BaremetalMetadata>[]>;
    name?: pulumi.Input<string>;
    nameTemplate?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    nameTemplates?: pulumi.Input<pulumi.Input<string>[]>;
    password?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BaremetalTimeouts>;
    userData?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}
