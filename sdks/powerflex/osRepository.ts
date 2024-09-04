// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OsRepository extends pulumi.CustomResource {
    /**
     * Get an existing OsRepository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OsRepositoryState, opts?: pulumi.CustomResourceOptions): OsRepository {
        return new OsRepository(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerflex:index/osRepository:OsRepository';

    /**
     * Returns true if the given object is an instance of OsRepository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OsRepository {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OsRepository.__pulumiType;
    }

    /**
     * Base URL of the OS repository
     */
    public /*out*/ readonly baseUrl!: pulumi.Output<string>;
    /**
     * User who created the OS repository
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Date of creation of the OS Repository
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * Whether the OS repository is from the web or not
     */
    public /*out*/ readonly fromWeb!: pulumi.Output<boolean>;
    /**
     * Type of the OS image. Supported types are redhat7, vmware_esxi, sles, windows2016, windows2019
     */
    public readonly imageType!: pulumi.Output<string>;
    /**
     * Whether the OS repository is in use or not
     */
    public /*out*/ readonly inUse!: pulumi.Output<boolean>;
    /**
     * Name of the OS repository
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password of the OS repository
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Name of the Razor
     */
    public /*out*/ readonly razorName!: pulumi.Output<string>;
    /**
     * Path of the RCM
     */
    public /*out*/ readonly rcmPath!: pulumi.Output<string>;
    /**
     * Type of the OS repository. Default is ISO
     */
    public readonly repoType!: pulumi.Output<string>;
    /**
     * Source path of the OS image
     */
    public readonly sourcePath!: pulumi.Output<string>;
    /**
     * State of the OS repository
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Describes the time in minutes to timeout the job.
     */
    public readonly timeout!: pulumi.Output<number>;
    /**
     * Username of the OS repository
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a OsRepository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OsRepositoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OsRepositoryArgs | OsRepositoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OsRepositoryState | undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["createdDate"] = state ? state.createdDate : undefined;
            resourceInputs["fromWeb"] = state ? state.fromWeb : undefined;
            resourceInputs["imageType"] = state ? state.imageType : undefined;
            resourceInputs["inUse"] = state ? state.inUse : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["razorName"] = state ? state.razorName : undefined;
            resourceInputs["rcmPath"] = state ? state.rcmPath : undefined;
            resourceInputs["repoType"] = state ? state.repoType : undefined;
            resourceInputs["sourcePath"] = state ? state.sourcePath : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as OsRepositoryArgs | undefined;
            if ((!args || args.imageType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageType'");
            }
            if ((!args || args.sourcePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourcePath'");
            }
            resourceInputs["imageType"] = args ? args.imageType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["repoType"] = args ? args.repoType : undefined;
            resourceInputs["sourcePath"] = args ? args.sourcePath : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["baseUrl"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["fromWeb"] = undefined /*out*/;
            resourceInputs["inUse"] = undefined /*out*/;
            resourceInputs["razorName"] = undefined /*out*/;
            resourceInputs["rcmPath"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OsRepository.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OsRepository resources.
 */
export interface OsRepositoryState {
    /**
     * Base URL of the OS repository
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * User who created the OS repository
     */
    createdBy?: pulumi.Input<string>;
    /**
     * Date of creation of the OS Repository
     */
    createdDate?: pulumi.Input<string>;
    /**
     * Whether the OS repository is from the web or not
     */
    fromWeb?: pulumi.Input<boolean>;
    /**
     * Type of the OS image. Supported types are redhat7, vmware_esxi, sles, windows2016, windows2019
     */
    imageType?: pulumi.Input<string>;
    /**
     * Whether the OS repository is in use or not
     */
    inUse?: pulumi.Input<boolean>;
    /**
     * Name of the OS repository
     */
    name?: pulumi.Input<string>;
    /**
     * Password of the OS repository
     */
    password?: pulumi.Input<string>;
    /**
     * Name of the Razor
     */
    razorName?: pulumi.Input<string>;
    /**
     * Path of the RCM
     */
    rcmPath?: pulumi.Input<string>;
    /**
     * Type of the OS repository. Default is ISO
     */
    repoType?: pulumi.Input<string>;
    /**
     * Source path of the OS image
     */
    sourcePath?: pulumi.Input<string>;
    /**
     * State of the OS repository
     */
    state?: pulumi.Input<string>;
    /**
     * Describes the time in minutes to timeout the job.
     */
    timeout?: pulumi.Input<number>;
    /**
     * Username of the OS repository
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OsRepository resource.
 */
export interface OsRepositoryArgs {
    /**
     * Type of the OS image. Supported types are redhat7, vmware_esxi, sles, windows2016, windows2019
     */
    imageType: pulumi.Input<string>;
    /**
     * Name of the OS repository
     */
    name?: pulumi.Input<string>;
    /**
     * Password of the OS repository
     */
    password?: pulumi.Input<string>;
    /**
     * Type of the OS repository. Default is ISO
     */
    repoType?: pulumi.Input<string>;
    /**
     * Source path of the OS image
     */
    sourcePath: pulumi.Input<string>;
    /**
     * Describes the time in minutes to timeout the job.
     */
    timeout?: pulumi.Input<number>;
    /**
     * Username of the OS repository
     */
    username?: pulumi.Input<string>;
}
