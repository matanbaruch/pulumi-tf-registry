// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirmwareRepository extends pulumi.CustomResource {
    /**
     * Get an existing FirmwareRepository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirmwareRepositoryState, opts?: pulumi.CustomResourceOptions): FirmwareRepository {
        return new FirmwareRepository(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerflex:index/firmwareRepository:FirmwareRepository';

    /**
     * Returns true if the given object is an instance of FirmwareRepository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirmwareRepository {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirmwareRepository.__pulumiType;
    }

    /**
     * Whether to approve the unsigned file or not.
     */
    public readonly approve!: pulumi.Output<boolean>;
    /**
     * Whether this Firmware Repository is set to default or not.
     */
    public /*out*/ readonly defaultCatalog!: pulumi.Output<boolean>;
    /**
     * Disk location of the Firmware Repository
     */
    public /*out*/ readonly diskLocation!: pulumi.Output<string>;
    /**
     * File Name
     */
    public /*out*/ readonly fileName!: pulumi.Output<string>;
    /**
     * Name of the Firmware Repository
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Password is only used if specifying a CIFS share Cannot be updated.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Specfies the path from where it will download the compliance file. Cannot be updated.
     */
    public readonly sourceLocation!: pulumi.Output<string>;
    /**
     * Describes the time in minutes to timeout the job.
     */
    public readonly timeout!: pulumi.Output<number>;
    /**
     * Username is only used if specifying a CIFS share Cannot be updated.
     */
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a FirmwareRepository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirmwareRepositoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirmwareRepositoryArgs | FirmwareRepositoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirmwareRepositoryState | undefined;
            resourceInputs["approve"] = state ? state.approve : undefined;
            resourceInputs["defaultCatalog"] = state ? state.defaultCatalog : undefined;
            resourceInputs["diskLocation"] = state ? state.diskLocation : undefined;
            resourceInputs["fileName"] = state ? state.fileName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["sourceLocation"] = state ? state.sourceLocation : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as FirmwareRepositoryArgs | undefined;
            if ((!args || args.sourceLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceLocation'");
            }
            resourceInputs["approve"] = args ? args.approve : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["sourceLocation"] = args ? args.sourceLocation : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["defaultCatalog"] = undefined /*out*/;
            resourceInputs["diskLocation"] = undefined /*out*/;
            resourceInputs["fileName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(FirmwareRepository.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirmwareRepository resources.
 */
export interface FirmwareRepositoryState {
    /**
     * Whether to approve the unsigned file or not.
     */
    approve?: pulumi.Input<boolean>;
    /**
     * Whether this Firmware Repository is set to default or not.
     */
    defaultCatalog?: pulumi.Input<boolean>;
    /**
     * Disk location of the Firmware Repository
     */
    diskLocation?: pulumi.Input<string>;
    /**
     * File Name
     */
    fileName?: pulumi.Input<string>;
    /**
     * Name of the Firmware Repository
     */
    name?: pulumi.Input<string>;
    /**
     * Password is only used if specifying a CIFS share Cannot be updated.
     */
    password?: pulumi.Input<string>;
    /**
     * Specfies the path from where it will download the compliance file. Cannot be updated.
     */
    sourceLocation?: pulumi.Input<string>;
    /**
     * Describes the time in minutes to timeout the job.
     */
    timeout?: pulumi.Input<number>;
    /**
     * Username is only used if specifying a CIFS share Cannot be updated.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirmwareRepository resource.
 */
export interface FirmwareRepositoryArgs {
    /**
     * Whether to approve the unsigned file or not.
     */
    approve?: pulumi.Input<boolean>;
    /**
     * Password is only used if specifying a CIFS share Cannot be updated.
     */
    password?: pulumi.Input<string>;
    /**
     * Specfies the path from where it will download the compliance file. Cannot be updated.
     */
    sourceLocation: pulumi.Input<string>;
    /**
     * Describes the time in minutes to timeout the job.
     */
    timeout?: pulumi.Input<number>;
    /**
     * Username is only used if specifying a CIFS share Cannot be updated.
     */
    username?: pulumi.Input<string>;
}
